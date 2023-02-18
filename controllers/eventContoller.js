// controllers/eventController.js
const eventRepository = require('../repositories/eventRepository');

const createEvent = async (req, res, next) => {
  try {
    const event = await eventRepository.createEvent(req.body);
    res.status(201).json(event);
  } catch (err) {
    next(err);
  }
};

const getAllEvents = async (req, res, next) => {
  try {
    const events = await eventRepository.getAllEvents();
    res.json(events);
  } catch (err) {
    next(err);
  }
};

const getEventById = async (req, res, next) => {
  try {
    const event = await eventRepository.getEventById(req.params.id);
    if (!event) {
      res.status(404).json({ message: 'Event not found' });
      return;
    }
    res.json(event);
  } catch (err) {
    next(err);
  }
};

const updateEventById = async (req, res, next) => {
  try {
    const event = await eventRepository.updateEventById(req.params.id, req.body);
    if (!event) {
      res.status(404).json({ message: 'Event not found' });
      return;
    }
    res.json(event);
  } catch (err) {
    next(err);
  }
};

const deleteEventById = async (req, res, next) => {
  try {
    await eventRepository.deleteEventById(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEventById,
  deleteEventById
};
