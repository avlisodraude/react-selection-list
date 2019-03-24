import React, {Component} from 'react';
import './app.scss';
import Helpers from './helpers';
import PropTypes from 'prop-types';

class ReactSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // this is the data to be parsed. It should come from the props
            dataNormalized: this.normalizeData(this.props.data),
            filteredCategories: this.normalizeData(this.props.data),
            selectedItems: [],
            errMsg: null
        };
        this.clusterName = React.createRef();
    }

    onDoubleClickHandler = (e) => {
        // let selectedItems = this.state.selectedItems;
        // let dataNormalized = this.state.dataNormalized;
        // let filteredCategories = this.state.filteredCategories;
        //
        // if(e.target.parentNode.id === 'sourceOpts') {
        //   filteredCategories = this.removeFromObj(filteredCategories, e.target.text);
        //   selectedItems.push({'value': e.target.value, 'prettyName': e.target.text});
        //   dataNormalized = this.removeFromObj(dataNormalized, e.target.text);
        //
        //   this.setState({
        //     selectedItems,
        //     filteredCategories,
        //     dataNormalized
        //   })
        // } else if(e.target.parentNode.id === 'selectedOpts') {
        //   selectedItems = this.removeFromObj(selectedItems, e.target.text);
        //   dataNormalized.push({'value': e.target.value, 'prettyName': e.target.text});
        //   filteredCategories.push({'value': e.target.value, 'prettyName': e.target.text});
        //
        //   this.setState({
        //     selectedItems,
        //     dataNormalized,
        //     filteredCategories
        //   })
        // }
    };

    normalizeData = (data) => data.map(
        field => (
            {'value': field, 'prettyName': Helpers.toPrettyFieldName(field)}
        ));

    onClickHandler = (e) => {
        let selectedItems = this.state.selectedItems;
        let dataNormalized = this.state.dataNormalized;
        let filteredCategories = this.state.filteredCategories;

        if (e.target.parentNode.id === 'sourceOpts') {
            filteredCategories = this.removeFromObj(filteredCategories, e.target.text);
            selectedItems.push({'value': e.target.value, 'prettyName': e.target.text});
            dataNormalized = this.removeFromObj(dataNormalized, e.target.text);

            this.setState({
                selectedItems,
                filteredCategories,
                dataNormalized,
                errMsg: false
            })
        } else if (e.target.parentNode.id === 'selectedOpts') {
            selectedItems = this.removeFromObj(selectedItems, e.target.text);
            dataNormalized.push({'value': e.target.value, 'prettyName': e.target.text});
            filteredCategories.push({'value': e.target.value, 'prettyName': e.target.text});

            this.setState({
                selectedItems,
                dataNormalized,
                filteredCategories,
                errMsg: false
            })
        }
    };

    removeFromObj = (arr, str) => arr.filter(obj => obj.prettyName !== str);

    filterFields = (arr, str) => arr.filter(item => item.prettyName.toLowerCase().includes(str.toLowerCase()));

    onKeywordFilter = (e) => {
        const newCategorySet = this.filterFields(this.state.dataNormalized, e.target.value);
        this.setState({
            filteredCategories: newCategorySet,
            errMsg: false
        })
    };

    submitForm = (e) => {
        if (this.clusterName.current.value.length === 0 || this.state.selectedItems.length === 0) {
            this.setState({
                errMsg: true
            })
        } else {
            const selectedValues = this.state.selectedItems.map(item => item.value);
            return {fields : selectedValues, label: this.clusterName.current.value, id: this.clusterName.current.value}
        }
        return false;
    };

    errorMsg = (msg) => {
        return <div className="errMsg">{msg}</div>
    };

    render() {
        let errMsgName = null;
        let errMsgFields = null;
        if (this.state.errMsg) {
            errMsgName = this.clusterName.current.value.length === 0 ? this.errorMsg('Name field is required!') : null;
            errMsgFields = this.state.selectedItems.length === 0 ? this.errorMsg('No fields selected!') : null;
        }

        let selected = null;
        if (this.state.selectedItems.length > 0) {
            selected = this.state.selectedItems.map(
                (item, index) => <option className="move-backward" onClick={this.onClickHandler}
                                         onDoubleClick={this.onDoubleClickHandler} key={index} id={index}
                                         value={item.value}>
                    {item.prettyName}</option>
            );
        }
        let options = this.state.filteredCategories.length > 0 ? this.state.filteredCategories : [];

        if (options.length > 0) {
            options.sort((a, b) => (a.prettyName > b.prettyName) ? 1 : -1);
            options = this.state.filteredCategories.map((field, index) =>
                <option className="move-forward" onClick={this.onClickHandler} onDoubleClick={this.onDoubleClickHandler}
                        key={index} id={index} value={field.value}>{field.prettyName}</option>
            );
        }

        return (
            <div className="external-container">

                <div className="bg--container">

                    <div className="field-selection">
                        <p>Select one or more fields to include</p>
                        <input
                            className="search-box fa fa-search"
                            type="text"
                            placeholder="Search.."
                            name="search"
                            onChange={this.onKeywordFilter}
                        />
                        <div className="selection-lists">
                            <select name="sourceOpts" onChange={this.sel} id="sourceOpts" multiple>
                                {options}
                            </select>
                            <select name="selectedOpts" multiple id="selectedOpts">
                                {selected}
                            </select>
                        </div>
                        <p className="cluster-name">Cluster name</p>
                        <input
                            type="text"
                            placeholder="cluster name"
                            name="name"
                            className="selection-group-name"
                            ref={this.clusterName}
                        />
                        <button className="submit-btn" onClick={this.submitForm} type="button">Choose</button>
                        {errMsgName}
                        {errMsgFields}
                    </div>
                </div>

            </div>
        );
    }
}

ReactSelection.propTypes = {
    data: PropTypes.array.isRequired
};
export default ReactSelection;
