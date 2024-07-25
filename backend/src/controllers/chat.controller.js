const ChatRepository = require('../repositories/chat.repository');

exports.sendMessage = async (req, res) => {
    try {
        const { message, user } = req.body;
        const response = await ChatRepository.send(message, user);

        res.status(response.status).json(response);
    } catch (err) {
        console.error(err)
        res.status(500).json({ status: 500, message: 'Ocorreu um erro ao executar a ação.', error: true });
    }
};

exports.getHistory = async (req, res) => {
    try {
        const { name } = req.params;

        const data = await ChatRepository.getMemory(name);

        res.status(200).json({ status: 200, message: 'Dados recuperados com sucesso!', data, total: data.length, error: false });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 500, message: 'Ocorreu um erro ao buscar as mensagens da conversa', data: [], error: true });W
    }
};

exports.insertMessage = async (req, res) => {
    try {
        const { name, message } = req.body;

        if (!message.role || !message.content) return res.status(400).json({ status: 400, message: 'Mensagem inválida', data: null, error: true });

        const data = await ChatRepository.insertMessage(name, message);

        res.status(200).json({ status: 200, message: 'Mensagem registrada com sucesso!', data, error: false });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 500, message: 'Ocorreu um erro ao registrar a mensagem', data: null, error: true });
    }
};

exports.clearChat = async (req, res) => {
    try {
        const { name } = req.params;

        if (!name) return res.status(400).json({ error: true, message: 'Nome do usuário inválido.', status: 400 });

        await ChatRepository.clearChatHistory(name);

        res.status(200).json({ error: false, message: 'Conversa limpa com sucesso!', status: 200 });
    } catch (err) {
        res.status(500).json({ error: true, message: 'Ocorreu um erro ao apagar histórico de mensagens.', status: 500 });
    }
};