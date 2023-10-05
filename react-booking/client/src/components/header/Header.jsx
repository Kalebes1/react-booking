import { FaBed, FaCar, FaPlane, FaTaxi } from "react-icons/fa"
import { MdOutlineAttractions } from "react-icons/md"
import { BiBed } from "react-icons/bi"
import { SlCalender } from "react-icons/sl"
import { AiOutlineUser } from "react-icons/ai"
import { DateRange } from 'react-date-range';
import { useState } from "react"
import { format } from "date-fns"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./header.css"

const Header = ({ type }) => {
    const [openDate, setOpendate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const handleOptions = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    }
    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode": "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FaBed />
                        <span>Stays</span>
                    </div><div className="headerListItem">
                        <FaPlane />
                        <span>Flights</span>
                    </div><div className="headerListItem">
                        <FaCar />
                        <span>Car rentals</span>
                    </div><div className="headerListItem">
                        <MdOutlineAttractions />
                        <span>Attractions</span>
                    </div><div className="headerListItem">
                        <FaTaxi />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" &&
                    <>
                        <h1 className="headerTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <p className="headerDesc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sequi harum?
                        </p>
                        <button className="headerBtn">
                            Sign in / Register
                        </button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <BiBed className="headerIcon" />
                                <input
                                    type="text"
                                    placeholder="Qual o seu destino?"
                                    className="headerSearchInput"
                                />
                            </div>
                            <div className="headerSearchItem">
                                <SlCalender className="headerIcon" />
                                <span onClick={() => setOpendate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} à 
                        ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <AiOutlineUser className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{
                                    `${options.adult} adulto 
                        . ${options.children} crianças 
                        . ${options.room} quartos`}</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adultos</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.adult <= 1}
                                                className="optionCounterButton"
                                                onClick={() => handleOptions("adult", "d")}
                                            >
                                                -
                                            </button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton" onClick={() => handleOptions("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Crianças</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.children <= 0}
                                                className="optionCounterButton"
                                                onClick={() => handleOptions("children", "d")}
                                            >
                                                -
                                            </button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton" onClick={() => handleOptions("children", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Quartos</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.room <= 1}
                                                className="optionCounterButton"
                                                onClick={() => handleOptions("room", "d")}
                                            >
                                                -
                                            </button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className="optionCounterButton" onClick={() => handleOptions("room", "i")}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn">Pesquisar</button>
                            </div>
                        </div> </>}
            </div>
        </div>
    )
}

export default Header

