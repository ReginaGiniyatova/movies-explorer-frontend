import { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onChecked, isFilterChecked }) {

    const [isChecked, setIsChecked] = useState(isFilterChecked || false);
    const handleChecked = (e) => {
        const checked = e.target.checked;
        setIsChecked(checked);
        onChecked(checked);
    }
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__switch">
                <input className="filter-checkbox__input" type="checkbox"
                checked={isChecked}
                onChange={handleChecked}></input>
                <span className="filter-checkbox__slider"></span>
            </label>
            <p className="filter-checkbox__text">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;