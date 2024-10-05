import { useState } from 'react';

const Navbar = () => {
  const [showCalendar, setShowCalendar] = useState(false); // State untuk menampilkan atau menyembunyikan kalender
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar); // Mengubah state untuk menampilkan/menyembunyikan kalender
  };

  // Fungsi untuk mengubah bulan
  const changeMonth = (direction) => {
    setCurrentMonth((prevMonth) => (prevMonth + direction + 12) % 12);
  };

  // Fungsi untuk mengubah tahun
  const changeYear = (direction) => {
    setCurrentYear((prevYear) => prevYear + direction);
  };

  // Update fungsi generateCalendarDays untuk menerima tahun sebagai parameter
  const generateCalendarDays = (month, year) => {
    const today = new Date();
    const yearParam = year;
    
    // Mendapatkan jumlah hari dalam bulan ini
    const daysInMonth = new Date(yearParam, month + 1, 0).getDate();
    
    // Mendapatkan hari pertama dalam bulan ini
    const firstDayOfMonth = new Date(yearParam, month, 1).getDay();
    
    // Membuat array kosong untuk mengisi kalender
    const daysArray = [];

    // Mengisi offset sebelum tanggal 1 bulan ini
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(null);
    }

    // Mengisi tanggal-tanggal bulan ini
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    return daysArray;
  };

  // Mendapatkan tanggal hari ini untuk menyorot
  const todayDate = new Date().getDate();

  return (
    <div className="navbar bg-base-100" style={{ marginBottom: '3px' }}>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={toggleCalendar}
          >
            <div className="indicator">
              {/* Ubah ikon keranjang menjadi ikon kalender */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10m4 0a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h14z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">Today</span>
            </div>
          </div>
          {showCalendar && (
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">Calendar</span>
                <div className="flex justify-between">
                  <button onClick={() => changeMonth(-1)}>Prev Month</button>
                  <span>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })}</span>
                  <button onClick={() => changeMonth(1)}>Next Month</button>
                </div>
                <div className="justify-between mt-2">
                  <span>{currentYear}</span>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center mt-4">
                  {/* Hari Minggu hingga Sabtu */}
                  <div>Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center mt-2">
                  {/* Generate tanggal-tanggal bulan ini dengan offset */}
                  {generateCalendarDays(currentMonth, currentYear).map((day, index) => (
                    <div
                      key={index}
                      className={`border p-1 ${
                        day === todayDate ? 'bg-blue-500 text-white rounded-full' : ''
                      }`}
                    >
                      {day ? day : ''}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
