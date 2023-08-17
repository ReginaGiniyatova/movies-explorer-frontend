import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__switch">
                <input className="filter-checkbox__input" type="checkbox"></input>
                <span className="filter-checkbox__slider"></span>
            </label>
            <p className="filter-checkbox__text">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;