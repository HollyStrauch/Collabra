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

