// components/DaySelector.js
import useFruitStore from '../store/fruitStore';

export default function DaySelector() {
  const selectedDay = useFruitStore((state) => state.selectedDay);
  const setSelectedDay = useFruitStore((state) => state.setSelectedDay);
  const allDays = useFruitStore((state) => state.allDays);

  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="day-select">Select a day: </label>
      <select id="day-select" value={selectedDay} onChange={e => setSelectedDay(e.target.value)}>
        <option value="">--Select a day--</option>
        {allDays.map(day => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>
    </div>
  );
}
