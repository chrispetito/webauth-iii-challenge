const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const users = require('../users/users-model')
const secrets = require('../config/secrets')

router.post('/register', (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 8)
    user.password = hash;

    users.add

})