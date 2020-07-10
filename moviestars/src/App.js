import React from 'react';
import './App.css';
import {collections} from "./data.js"
import {assets} from "./data.js"
// import {FaStar} from "react-icons/fa"

class App extends React.Component {
  constructor() {
      super()

      this.state = {
          collectionsarr: collections,
          assetsarr: assets,
          clickedassets: [],
          assetsSortingMode: "sortbyname"
      }
  }

  handleAssetsClick(id){
    const clickedassetsdata = this.state.assetsarr.filter(asset => asset.collectionId === id)
    this.setState({
      clickedassets: clickedassetsdata
    })
  }

  makeMaster(idclick){
    const themasteridnr = this.state.clickedassets.filter(masterpot => masterpot.id === idclick)[0].id
    const newcollections = this.state.collectionsarr.slice()
    const index = this.state.clickedassets.filter(masterpot => masterpot.id === idclick)[0].collectionId - 1
    newcollections[index].masterAssetId = themasteridnr
    this.setState({   
      ...this.state,
      collectionsarr: newcollections
    })
  }

  getAssetPath(masterAssetId){
    const asset = this.state.assetsarr.find(x => x.id === masterAssetId)
    return asset ? require(`./${asset.path}`) : ''
  }

  getMasterId(assetnr){
    let idresult = this.state.collectionsarr.find(collection => collection.masterAssetId === assetnr)
    if(typeof idresult === "undefined"){
      return -1
    } else if (typeof idresult !== "undefined"){
      return idresult.masterAssetId
    } 
  }

  getSortedAssets() {
    if(this.state.assetsSortingMode === "sortbyname") {
        return this.state.clickedassets.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if(this.state.assetsSortingMode === "sortbyid") {
        return this.state.clickedassets.sort((a, b) => a.id - b.id);
    }
    return [];
  }

  recursiveTags(collection){
    const result = [];
    let tagObj = this.state.collectionsarr.find(element => element.id === collection).tags;
    while (tagObj) {
        result.push(tagObj.name);
        tagObj = tagObj.subTag;
    }
    return result.join(" > ");
  }
  
  render(){
  return (
          <div className="App">
            <div className="headercontainer">
              <h1>Sitecore coding challenge</h1>
              
              <div className="selector">
                <label>Sort assets by: </label>
                <select name="sorting" value={this.state.assetsSortingMode} onChange={(e) => this.setState({assetsSortingMode: e.target.value})}>
                    <option value="sortbyname">NAME</option>
                    <option value="sortbyid">ID</option>
                </select>
                {/* <p>Master Asset = <FaStar/></p> */}
              </div>
            </div>
            
            <div className="content">
              <div className="left">
                {this.state.collectionsarr.map(element => 
                  <div className="collectioncontainer" key={element.id}>
                    <img className="thumbnail" src={this.getAssetPath(element.masterAssetId)} alt="pic"/>
                    <div className="textcontainer">
                      <p className="collectionname" onClick={()=>this.handleAssetsClick(element.id)}>{element.name}</p>
                      <p className="recursion">{this.recursiveTags(element.id)}</p>
                    </div> 
                  </div>
                )}
              </div>

              <div className="right">
                  {this.getSortedAssets().map(asset => 
                    <div className="assetcontainer" key={asset.id}>
                      <img className="assetimage" src={require(`./${asset.path}`)} alt="pic"/>
                      <div className="assettextcontainer">
                        <p className="assetname">{asset.name}</p>
                        <p className="assetid">ID: {asset.id}</p>
                        {asset.id !== this.getMasterId(asset.id) && <button className="assetbutton" onClick={() => this.makeMaster(asset.id)}>Make master!</button> }
                        {/* {asset.id === this.getMasterId(asset.id) && <FaStar/>} */}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        )
  }
}

export default App
