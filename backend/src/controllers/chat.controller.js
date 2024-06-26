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
        res.status(500).json({ status: 500, message: 'Ocorreu um erro ao buscar as mensagens da conversa', data: [], error: true });
    }
};