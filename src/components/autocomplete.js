import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'tag0', label: 'тег0' },
    { value: 'tag1', label: 'тег1' },
    { value: 'tag2', label: 'тег2' },
    { value: 'tag3', label: 'тег3' }
];

class Autocomplete extends React.Component {
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
        );
    }
}

export default Autocomplete