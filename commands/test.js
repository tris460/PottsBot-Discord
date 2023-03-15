module.exports = {
    name: 'test',
    description: 'Ejecuta una prueba de funcionamiento',
    execute(message, args) {
        message.channel.send('ALERTA, ALERTA, TEST');
    },
};