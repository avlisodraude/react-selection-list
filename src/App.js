import React, { Component } from 'react';
import './app.scss';
import Helpers from './helpers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // this is the data to be parsed. It should come from the props
      dataNormalized : this.normalizeData(this.tempOpts()),
      filteredCategories : this.normalizeData(this.tempOpts()),
      selectedItems : []
    }
  }

  tempOpts = () => ["bg:productioncountries.bg:country","bg:executives.bg:executive.bg:role","bg:executives.bg:executive.bg:clarification","bg:executives.bg:executive.bg:name","bg:deprecatedkeyword.bg:keyword","bg:recordings.bg:recording.bg:withaudience","bg:recordings.bg:recording.bg:annotation","bg:recordings.bg:recording.bg:dateprecision","bg:contractors.bg:contractor.bg:name","dcterms:isPartOf.dc:identifier","bg:summary","bg:museum-genres.bg:genre","bg:casts.bg:cast.bg:character","bg:casts.bg:cast.bg:clarification","bg:casts.bg:cast.bg:name","bg:museum-names.bg:name","bg:links.bg:link","bg:part","bg:musicstyles.bg:musicstyle","bg:catalog","bg:producers.bg:producer.bg:name","bg:context.bg:composition","bg:context.bg:awards","bg:context.bg:occasion","bg:context.bg:context","bg:context.bg:silent","bg:museum-description","bg:museum-annotation","bg:maintitles.bg:title","bg:personnames.bg:personname","bg:qualification.bg:license","bg:qualification.bg:source","bg:qualification.bg:block","bg:qualification.bg:rights","bg:used-archivematerials.bg:used-archivematerial","dc:identifier","bg:transcripts.bg:transcript.bg:text","bg:transcripts.bg:transcript.@rights","bg:transcripts.bg:transcript.@sequencenumber","bg:transcripts.bg:transcript.@label","bg:transcripts.bg:transcript.@source","bg:transcripts.bg:transcript.@endtime","bg:transcripts.bg:transcript.@starttime","bg:transcripts.bg:transcript.@annotation","bg:annotation","bg:museum-locations.bg:location","dc:relation","bg:keywords.bg:keyword","bga:series.bg:productioncountries.bg:country","bga:series.bg:executives.bg:executive.bg:role","bga:series.bg:executives.bg:executive.bg:clarification","bga:series.bg:executives.bg:executive.bg:name","bga:series.bg:recordings.bg:recording.bg:withaudience","bga:series.bg:contractors.bg:contractor.bg:name","bga:series.bg:summary","bga:series.bg:museum-genres.bg:genre","bga:series.bg:casts.bg:cast.bg:character","bga:series.bg:casts.bg:cast.bg:clarification","bga:series.bg:casts.bg:cast.bg:name","bga:series.bg:personnames.bg:personname","bga:series.bg:genres.bg:genre","bga:series.bg:musicstyles.bg:musicstyle","bga:series.bg:catalog","bga:series.bg:producers.bg:producer.bg:name","bga:series.bg:context.bg:awards","bga:series.bg:context.bg:occasion","bga:series.bg:context.bg:context","bga:series.bg:context.bg:composition","bga:series.bg:maintitles.bg:title","bga:series.bg:qualification.bg:license","bga:series.bg:qualification.bg:source","bga:series.bg:qualification.bg:block","bga:series.bg:qualification.bg:rights","bga:series.dc:identifier","bga:series.bg:annotation","bga:series.bg:keywords.bg:keyword","bga:series.bg:locations.bg:location","bga:series.bg:creators.bg:creator.bg:clarification","bga:series.bg:creators.bg:creator.bg:roles.bg:role","bga:series.bg:creators.bg:creator.bg:name","bga:series.bg:funders.bg:funder.bg:name","bga:series.bg:names.bg:name","bga:series.bg:museum-description","bga:series.bg:targetgroups.bg:targetgroup","bga:series.bg:museum-summary","bga:series.bg:originalCreators.bg:creator.bg:role","bga:series.bg:originalCreators.bg:creator.bg:clarification","bga:series.bg:originalCreators.bg:creator.bg:name","bga:series.bg:sponsors.bg:sponsor.bg:name","bga:series.bg:subtitles.bg:title","bga:series.bg:recordinglocations.bg:location","bga:series.bg:speakers.bg:speaker.bg:role","bga:series.bg:speakers.bg:speaker.bg:name","bga:series.bg:links.bg:link","bg:locations.bg:location","layer__asr.wordTimes","layer__asr.carrierId","layer__asr.fragmentId","layer__asr.words","bg:creators.bg:creator.bg:clarification","bg:creators.bg:creator.bg:roles.bg:role","bg:creators.bg:creator.bg:name","bg:funders.bg:funder.bg:name","bg:names.bg:name","bga:segment.bg:languages.bg:language.bg:use","bga:segment.bg:recordinglocations.bg:location","bga:segment.bg:executives.bg:executive.bg:role","bga:segment.bg:executives.bg:executive.bg:clarification","bga:segment.bg:executives.bg:executive.bg:name","bga:segment.bg:deprecatedkeyword.bg:keyword","bga:segment.bg:recordings.bg:recording.bg:withaudience","bga:segment.bg:recordings.bg:recording.bg:annotation","bga:segment.bg:contractors.bg:contractor.bg:name","bga:segment.dcterms:isPartOf.dc:identifier","bga:segment.bg:summary","bga:segment.bg:casts.bg:cast.bg:character","bga:segment.bg:casts.bg:cast.bg:clarification","bga:segment.bg:casts.bg:cast.bg:name","bga:segment.bg:links.bg:link","bga:segment.bg:musicstyles.bg:musicstyle","bga:segment.bg:personnames.bg:personname","bga:segment.bg:producers.bg:producer.bg:name","bga:segment.bg:context.bg:colour","bga:segment.bg:context.bg:composition","bga:segment.bg:context.bg:awards","bga:segment.bg:context.bg:occasion","bga:segment.bg:context.bg:context","bga:segment.bg:context.bg:silent","bga:segment.bg:museum-description","bga:segment.bg:museum-annotation","bga:segment.bg:maintitles.bg:title","bga:segment.bg:qualification.bg:license","bga:segment.bg:qualification.bg:source","bga:segment.bg:qualification.bg:block","bga:segment.bg:qualification.bg:rights","bga:segment.dc:identifier","bga:segment.bg:transcripts.bg:transcript.bg:text","bga:segment.bg:transcripts.bg:transcript.@rights","bga:segment.bg:transcripts.bg:transcript.@label","bga:segment.bg:transcripts.bg:transcript.@source","bga:segment.bg:transcripts.bg:transcript.@endtime","bga:segment.bg:transcripts.bg:transcript.@starttime","bga:segment.bg:transcripts.bg:transcript.@annotation","bga:segment.bg:annotation","bga:segment.bg:museum-locations.bg:location","bga:segment.dc:relation","bga:segment.bg:museum-languageid","bga:segment.bg:keywords.bg:keyword","bga:segment.bg:locations.bg:location","bga:segment.bg:availablecollections.bg:collection","bga:segment.bg:creators.bg:creator.bg:clarification","bga:segment.bg:creators.bg:creator.bg:roles.bg:role","bga:segment.bg:creators.bg:creator.bg:name","bga:segment.bg:funders.bg:funder.bg:name","bga:segment.bg:names.bg:name","bga:segment.bg:external-id","bga:segment.bg:museum-summary","bga:segment.bg:originalCreators.bg:creator.bg:role","bga:segment.bg:originalCreators.bg:creator.bg:clarification","bga:segment.bg:originalCreators.bg:creator.bg:name","bga:segment.bg:sponsors.bg:sponsor.bg:name","bga:segment.bg:subtitles.bg:title","bga:segment.bg:carriers.bg:carrier.bg:archivestatus","bga:segment.bg:carriers.bg:carrier.bg:audiotype","bga:segment.bg:carriers.bg:carrier.bg:location","bga:segment.bg:carriers.bg:carrier.bg:endtime","bga:segment.bg:carriers.bg:carrier.bg:annotation","bga:segment.bg:carriers.bg:carrier.bg:starttime","bga:segment.bg:carriers.bg:carrier.bg:origin","bga:segment.bg:carriers.bg:carrier.bg:parentcarrierid","bga:segment.bg:carriers.bg:carrier.bg:metrage","bga:segment.bg:carriers.bg:carrier.bg:carrier-annotation","bga:segment.bg:carriers.bg:carrier.bg:technicaldetails","bga:segment.bg:clearingstatus","bga:segment.bg:nationalities.bg:nationality.bg:role","bga:segment.bg:nationalities.bg:nationality.bg:country","bga:segment.bg:speakers.bg:speaker.bg:role","bga:segment.bg:speakers.bg:speaker.bg:name","bga:segment.bg:type","bga:segment.bg:genres.bg:genre","bga:segment.bg:description","bga:segment.bg:themes.bg:theme","bg:sponsors.bg:sponsor.bg:name","bg:external-id","bg:targetgroups.bg:targetgroup","bg:museum-personnames.bg:personname","bg:museum-summary","bg:originalCreators.bg:creator.bg:role","bg:originalCreators.bg:creator.bg:clarification","bg:originalCreators.bg:creator.bg:name","bg:publications.bg:publication.bg:starttimestamp","bg:publications.bg:publication.bg:frequency","bg:publications.bg:publication.bg:productid","bg:publications.bg:publication.bg:technical-annotation","bg:publications.bg:publication.bg:rebroadcast","bg:publications.bg:publication.bg:distributionformat","bg:publications.bg:publication.bg:live","bg:publications.bg:publication.bg:timecodestandard","bg:publications.bg:publication.bg:broadcastnorm","bg:publications.bg:publication.bg:title","bg:publications.bg:publication.bg:weeknumber","bg:publications.bg:publication.bg:duration-annotation","bg:publications.bg:publication.bg:dateprecision","bg:publications.bg:publication.bg:publication-annotation","bg:subtitles.bg:title","bg:carriers.bg:carrier.bg:archivestatus","bg:carriers.bg:carrier.bg:audiotype","bg:carriers.bg:carrier.bg:location","bg:carriers.bg:carrier.bg:endtime","bg:carriers.bg:carrier.bg:annotation","bg:carriers.bg:carrier.bg:starttime","bg:carriers.bg:carrier.bg:origin","bg:carriers.bg:carrier.bg:format","bg:carriers.bg:carrier.bg:externalreference","bg:carriers.bg:carrier.bg:parentcarrierid","bg:carriers.bg:carrier.bg:carrierclass","bg:carriers.bg:carrier.bg:id","bg:carriers.bg:carrier.bg:metrage","bg:carriers.bg:carrier.bg:carrier-annotation","bg:carriers.bg:carrier.bg:carrier-endposition","bg:carriers.bg:carrier.bg:carriertype","bg:carriers.bg:carrier.bg:technicaldetails","bg:clearingstatus","bg:nationalities.bg:nationality.bg:role","bg:nationalities.bg:nationality.bg:country","bg:speakers.bg:speaker.bg:role","bg:speakers.bg:speaker.bg:name","bg:museum-themes.bg:theme","bga:season.bg:languages.bg:language.bg:use","bga:season.bg:productioncountries.bg:country","bga:season.bg:executives.bg:executive.bg:role","bga:season.bg:executives.bg:executive.bg:clarification","bga:season.bg:executives.bg:executive.bg:name","bga:season.bg:recordings.bg:recording.bg:withaudience","bga:season.bg:contractors.bg:contractor.bg:name","bga:season.bg:summary","bga:season.bg:casts.bg:cast.bg:character","bga:season.bg:casts.bg:cast.bg:clarification","bga:season.bg:casts.bg:cast.bg:name","bga:season.bg:genres.bg:genre","bga:season.bg:personnames.bg:personname","bga:season.bg:producers.bg:producer.bg:name","bga:season.bg:context.bg:colour","bga:season.bg:context.bg:awards","bga:season.bg:context.bg:occasion","bga:season.bg:context.bg:context","bga:season.bg:maintitles.bg:title","bga:season.bg:qualification.bg:license","bga:season.bg:qualification.bg:source","bga:season.bg:qualification.bg:block","bga:season.bg:qualification.bg:rights","bga:season.dc:identifier","bga:season.bg:annotation","bga:season.bg:keywords.bg:keyword","bga:season.bg:locations.bg:location","bga:season.bg:creators.bg:creator.bg:clarification","bga:season.bg:creators.bg:creator.bg:roles.bg:role","bga:season.bg:creators.bg:creator.bg:name","bga:season.bg:funders.bg:funder.bg:name","bga:season.bg:names.bg:name","bga:season.bg:targetgroups.bg:targetgroup","bga:season.bg:sponsors.bg:sponsor.bg:name","bga:season.bg:subtitles.bg:title","bga:season.bg:recordinglocations.bg:location","bga:season.bg:speakers.bg:speaker.bg:role","bga:season.bg:speakers.bg:speaker.bg:name","bga:season.dcterms:isPartOf.dc:identifier","bga:season.bg:links.bg:link","bg:genres.bg:genre","bg:description","bg:museum-keywords.bg:keyword","bg:themes.bg:theme"];
  onDoubleClick = (e) => {
    console.log(e)
    let selectedItems = this.state.selectedItems;
    let dataNormalized = this.state.dataNormalized;
    let filteredCategories = this.state.filteredCategories;

    if(e.target.parentNode.id === 'sourceOpts') {
      filteredCategories = this.removeFromObj(filteredCategories, e.target.text);
      selectedItems.push({'value': e.target.value, 'prettyName': e.target.text});
      dataNormalized = this.removeFromObj(dataNormalized, e.target.text);

      this.setState({
        selectedItems,
        filteredCategories,
        dataNormalized
      })
    } else if(e.target.parentNode.id === 'selectedOpts') {
      selectedItems = this.removeFromObj(selectedItems, e.target.text);
      dataNormalized.push({'value': e.target.value, 'prettyName': e.target.text});
      filteredCategories.push({'value': e.target.value, 'prettyName': e.target.text});

      this.setState({
        selectedItems,
        dataNormalized,
        filteredCategories
      })
    }
  };

  normalizeData = (data) => data.map(
      field => (
          {'value': field, 'prettyName': Helpers.toPrettyFieldName(field)}
      ));

  selecting = (e) => {

  };

  removeFromObj = (arr, str) => arr.filter(obj => obj.prettyName !== str);

  filterFields = (arr, str) => arr.filter(item => item.prettyName.toLowerCase().includes(str.toLowerCase()));

  onKeywordFilter = (e) => {
    const newCategorySet = this.filterFields(this.state.dataNormalized, e.target.value);
    this.setState({
      filteredCategories: newCategorySet
    })
  };
sel = (e) => {
  console.log(e);
}
  render() {
    let selected = null;
    if(this.state.selectedItems.length > 0) {
      selected = this.state.selectedItems.map(
          (item, index) => <option className="fa fa-backward" onClick={this.selecting} onDoubleClick={this.onDoubleClick} key={index} id={index} value={item.value}>
            {item.prettyName}</option>
      );
    }
    let options = this.state.filteredCategories.length > 0 ? this.state.filteredCategories : [];

    if(options.length > 0) {
      options.sort((a,b) => (a.prettyName > b.prettyName) ? 1 : -1);
      options = this.state.filteredCategories.map((field, index) =>
          <option className="fa fa-forward" aria-hidden={true} onSelect={this.sel} onClick={this.selecting} onDoubleClick={this.onDoubleClick} key={index} id={index} value={field.value}>{field.prettyName}</option>
      );
    }

    return (
      <div className="App">
        <div className="sourceOptions">
          <div className="searchField">
            <input
                className="fa fa-search"
                type="text"
                placeholder="Search.."
                name="search"
                onChange={this.onKeywordFilter}
            />
          </div>
          <select name="sourceOpts" onChange={this.sel} id="sourceOpts" multiple>
            {options}
          </select>
        </div>

        <select name="selectedOpts" multiple id="selectedOpts">
          {selected}
        </select>
      </div>
    );
  }
}

export default App;
