const express = require('express');
const ContactModel = require('../models/contactSchema')

const router = express.Router()

router.get('/', async(req, res) => {
  try {
    const contacts = await ContactModel.find()
    res.status(200).json(contacts)
  } catch (error) {
    console.log(error);
  }
})

router.post('/', async(req, res) => {
  const contactData = req.body
  console.log(contactData);

  try {
    const contact = await ContactModel.create(contactData)
    res.status(201).json(contact)
  } catch (error) {
    console.error(error);
    res.status(400).json('Bad request')
  }
})

module.exports = router