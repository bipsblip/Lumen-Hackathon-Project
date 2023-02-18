// services/eventService.js
const Event = require('../models/Event');

const createEvent = async (eventData) => {
  const event = new Event(eventData);
  return event.save();
};

const getAllEvents = async () => {
  return Event.find();
};

const getEventById = async (id) => {
  return Event.findById(id);
};

const updateEventById = async (id, eventData) => {
  return Event.findByIdAndUpdate(id, eventData, { new: true });
};

const deleteEventById = async (id) => {
  return Event.findByIdAndDelete(id);
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEventById,
  deleteEventById,
};
