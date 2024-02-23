function validation (req, res ,next) {

    const { body } = req

    if ( !body.validation1 || !body.validation2) {
       next(new Error('Vallidation Error'))
    }

    next()
}

export { validation }