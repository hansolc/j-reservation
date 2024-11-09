const endpoint = {
  // auth
  login: `/login`,
  registration: `/join`,
  adminRegistration: `/join/admin`,
  // reservation
  createReservation: `/reservation/user`,
  confirmReservation: `/reservation/confirm`,
  getReservationUser: `/reservation/user`,
  getReservationAdmin: `/reservation/all`,
  updatereservationAdmin: `/reservation/update-status`,
  // inquiry
  getInquiresUser: `/inquiries/user`,
  deleteInquiryUser: `/inquiries`,
  createInquiryUser: `/inquiries/user`,
  getAllInquiresAdmin: `/inquiries/all`,
  // response
  responseAdmin: `/inquiries/respond`,
};

export default endpoint;
