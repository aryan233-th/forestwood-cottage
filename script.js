// open/close booking modal
function openBooking(){document.getElementById('bookingModal').classList.remove('hidden');}
function closeBooking(){document.getElementById('bookingModal').classList.add('hidden');}

// WhatsApp redirect
document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  const fd = new FormData(this);
  const msg = `Hi, I'd like to book from ${fd.get('checkin')} to ${fd.get('checkout')} for ${fd.get('guests')} guests.`;
  const url = `https://wa.me/917559550471?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  closeBooking();
});
document.querySelectorAll('.book-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    // Customize message per room if needed
    let room = this.closest('.room-card')?.querySelector('.room-title')?.textContent || '';
    let msg = room
      ? `Hi, I want to book the ${room} at Forest Wood Cottage`
      : `Hi, I want to book a room at Forest Wood Cottage`;
    let url = `https://wa.me/91821962850?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  });
});
