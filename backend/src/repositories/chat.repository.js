const openai = require("../config/openai");

const ChatRepository = {
    MEMORY: new Map(),
    send: async (message, user) => {
        let response = { status: 200, response: '', error: false };
        if (!message || !user) {
            return { status: 400, response: 'Dados inválidos', error: true };
        }

        const incomingMessage = {
            role: "user",
            content: message,
        };

        try {
            let messages = [];
            if (ChatRepository.MEMORY.has(user)) messages = await ChatRepository.MEMORY.get(user);

            if (!messages || messages.length === 0) messages.push({ role: 'system', content: 'O nome do usuário é: ' + user });

            messages.push(incomingMessage);

            ChatRepository.MEMORY.set(user, messages);

            console.log({ messages });

            const data = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages,
                temperature: 0.5,
                max_tokens: 256,
                top_p: 0.5,
                frequency_penalty: 0,
                presence_penalty: 0,
            });

            console.log({ choices: data.choices[0].message.content });

            ChatRepository.MEMORY.set(user, [...messages, { role: "assistant", content: data.choices[0].message.content }]);
            response.response = data?.choices[0]?.message?.content || 'Ocorreu um erro!';
            response.error = false;
        } catch (err) {
            console.error(err);
            response = { ...response, status: 500, messages: 'Ocorreu um erro ao enviar a requisição ao assistente.', error: true };
        }

        return response;
    },
    getMemory: async (name) => {
        const messages = await ChatRepository.MEMORY.get(name);
        if (!messages || messages.length === 0) ChatRepository.MEMORY.set(name, []);
        return messages || [];
    },
};

module.exports = ChatRepository;