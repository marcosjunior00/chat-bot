const ChatRepository = require('../repositories/chat.repository');

exports.sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const response = await ChatRepository.send();

        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ message: 'Ocorreu um erro ao executar a ação.', error: true });
    }
};