function ErrorHandler (err, req, res, next) {
    if (err) {
        console.log(err.message)
        res.json({
            erroreMessage: err.message
        })
    }
}

export { ErrorHandler }