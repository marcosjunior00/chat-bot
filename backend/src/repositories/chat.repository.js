const openai = require("../config/openai");

const ChatRepository = {
    send: async (memory) => {
        const response = { status: 200, response: '', error: false };

        try {
            const data = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        "role": "user",
                        "content": [
                            {
                                "type": "text",
                                "text": "Olá, mundo!"
                            }
                        ]
                    },
                ],
                temperature: 0.5,
                max_tokens: 256,
                top_p: 0.5,
                frequency_penalty: 0,
                presence_penalty: 0,
            });

            console.log({ data });
        } catch (err) {
            console.error(err);
            response = { ...response, status: 500, messages: 'Ocorreu um erro ao enviar a requisição ao assistente.', error: true };
        }

        return response;
    },
};

module.exports = ChatRepository;