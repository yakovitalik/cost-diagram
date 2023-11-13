import DiagramBar from './DiagramBar';
import './Diagram.css';

const Diagram = (props) => {

    const dataDetsValues = props.dataSets.map(dataSet => dataSet.value);
    const maxMonthCosts = Math.max(...dataDetsValues);

    return (<div className='diagram'>
        {props.dataSets.map(dataSet => (
        <DiagramBar
        key={dataSet.label} 
        value={dataSet.value} 
        maxValue={maxMonthCosts}
        label={dataSet.label} 
        />))}
    </div>);
};

export default Diagram;