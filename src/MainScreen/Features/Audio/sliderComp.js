import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Slider, Label } from 'devextreme-react/slider';

const format = function(value) {
    return value + " units";
}

class slider extends React.Component {
    render() {
        return (
            <Slider>
                <Label 
                    visible={true}
                    format={format}
                    position="bottom" />
            </Slider>
        );
    }
}

export default slider;



/*class Slider extends React.Component {
    componentDidMount() {
        this.slider = new SliderDHX(this.slider, {});
    }
    componentWillUnmount() {
        this.slider.destructor();
    }

    render() {
        return (
            <div style={{width: "600px"}} ref={el => this.el = el}></div>
        );
    }
}

Slider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    mode: PropTypes.oneOf(["vertical", "horizontal"]),
    range: PropTypes.bool,
    value: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.string
    ]),
    invers: PropTypes.bool,
    tooltip: PropTypes.bool,
    css: PropTypes.string,
    tick: PropTypes.number,
    tickTemplate: PropTypes.func,
    majorTick: PropTypes.number,
    label: PropTypes.string,
    required: PropTypes.bool,
    helpMessage: PropTypes.string,
    labelPosition: PropTypes.string,
    labelWidth: PropTypes.string,
    hiddenLabel: PropTypes.bool

};

export default Slider;*/