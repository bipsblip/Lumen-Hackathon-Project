const Event = require('../models/eventModel');

const createEvent = async (eventData) => {
  const event = new Event(eventData);
  await event.save();
  return event;
};

const getAllEvents = async () => {
  const events = await Event.find().populate('participants');
  return events;
};

const getEventById = async (id) => {
  const event = await Event.findById(id).populate('participants');
  return event;
};

const updateEventById = async (id, eventData) => {
  const event = await Event.findByIdAndUpdate(id, eventData, { new: true }).populate('participants');
  return event;
};

const deleteEventById = async (id) => {
  await Event.findByIdAndDelete(id);
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEventById,
  deleteEventById
};

