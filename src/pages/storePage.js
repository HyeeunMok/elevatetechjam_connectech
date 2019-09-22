import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class StoreBuy extends React.Component {
    allStores = []
    //#region allCoords
    allCoords = {
        "coords": [[
            51.0466,
            -114.069
        ],
        [
            53.543167,
            -113.495605
        ],
        [
            43.428467,
            -80.438049
        ],
        [
            43.3941,
            -80.3208
        ],
        [
            43.0249,
            -81.2776
        ],
        [
            45.371212,
            -75.768753
        ],
        [
            45.387,
            -75.6783
        ],
        [
            44.0564,
            -79.4809
        ],
        [
            43.893958,
            -78.879131
        ],
        [
            43.4991,
            -80.5303
        ],
        [
            44.502487,
            -80.220872
        ],
        [
            43.848313,
            -79.459085
        ],
        [
            43.6513164,
            -79.3662814
        ],
        [
            43.005002,
            -81.30333
        ],
        [
            43.579208,
            -79.683835
        ],
        [
            43.43761,
            -79.7431
        ],
        [
            43.712049,
            -79.727164
        ],
        [
            45.46786,
            -75.49201
        ],
        [
            43.67123,
            -79.29446
        ],
        [
            43.68744,
            -79.28395
        ],
        [
            45.30994,
            -75.912
        ],
        [
            43.758264,
            -79.313588
        ],
        [
            43.52555,
            -79.86973
        ],
        [
            45.353934,
            -75.644237
        ],
        [
            51.014234,
            -114.16907
        ],
        [
            43.605737,
            -79.650604
        ],
        [
            43.7112,
            -79.37653
        ],
        [
            43.131548,
            -80.746764
        ],
        [
            43.67947,
            -79.34284
        ],
        [
            43.63135,
            -79.55239
        ],
        [
            53.59679,
            -113.48635
        ],
        [
            43.17314,
            -80.24353
        ],
        [
            49.283211,
            -123.117325
        ],
        [
            43.2299,
            -79.7659
        ],
        [
            46.26462,
            -63.14704
        ],
        [
            44.4127,
            -79.7101
        ],
        [
            53.5613,
            -113.506
        ],
        [
            45.4765,
            -75.6979
        ],
        [
            43.250378,
            -79.810829
        ],
        [
            53.52809,
            -113.29555
        ],
        [
            53.4546,
            -113.434
        ],
        [
            45.5069,
            -73.3793
        ],
        [
            46.76826,
            -71.28618
        ],
        [
            48.42503,
            -123.365372
        ],
        [
            51.087414,
            -114.153702
        ],
        [
            45.35062,
            -75.80554
        ],
        [
            53.487076,
            -113.514122
        ],
        [
            52.1278,
            -106.668
        ],
        [
            52.1145,
            -106.594
        ],
        [
            44.686224,
            -63.558334
        ],
        [
            44.64841,
            -63.674933
        ],
        [
            45.3707,
            -63.3028
        ],
        [
            45.5275,
            -73.6477
        ],
        [
            46.85936,
            -71.21611
        ],
        [
            53.6416,
            -113.625
        ],
        [
            45.261921,
            -74.129768
        ],
        [
            49.8839,
            -97.1983
        ],
        [
            49.8979,
            -97.0642
        ],
        [
            49.951759,
            -97.148735
        ],
        [
            44.64257,
            -63.579014
        ],
        [
            49.248989,
            -122.895907
        ],
        [
            43.77898,
            -79.34186
        ],
        [
            49.05088,
            -122.312607
        ],
        [
            49.112915,
            -122.677633
        ],
        [
            49.16614,
            -123.138447
        ],
        [
            46.096,
            -64.7607
        ],
        [
            43.6568,
            -79.4343
        ],
        [
            43.46344,
            -79.68579
        ],
        [
            43.725108,
            -79.452809
        ],
        [
            43.824305,
            -79.531082
        ],
        [
            45.502871,
            -73.570091
        ],
        [
            45.44112,
            -75.73276
        ],
        [
            45.813,
            -64.2029
        ],
        [
            43.691838,
            -79.466246
        ],
        [
            43.8446,
            -66.1083
        ],
        [
            50.40477,
            -104.623247
        ],
        [
            45.425898,
            -75.692457
        ],
        [
            51.1103,
            -114.041
        ],
        [
            50.950294,
            -114.063873
        ],
        [
            53.602518,
            -113.44554
        ],
        [
            53.520115,
            -113.455894
        ],
        [
            52.2867,
            -113.814
        ],
        [
            48.44522,
            -123.334413
        ],
        [
            48.446621,
            -123.371506
        ],
        [
            49.8256,
            -99.9618
        ],
        [
            43.77433,
            -79.25367
        ],
        [
            43.13287,
            -79.225578
        ],
        [
            43.648308,
            -79.38224
        ],
        [
            42.273654,
            -83.00475
        ],
        [
            42.3138,
            -82.9348
        ],
        [
            45.359447,
            -73.724777
        ],
        [
            45.417519,
            -72.7481
        ],
        [
            45.5695,
            -73.7523
        ],
        [
            46.356194,
            -72.58606
        ],
        [
            50.481419,
            -104.617844
        ],
        [
            43.72694,
            -79.402666
        ],
        [
            43.82616,
            -79.55624
        ],
        [
            43.508893,
            -79.627248
        ],
        [
            47.030015,
            -65.491262
        ],
        [
            46.109704,
            -64.832883
        ],
        [
            49.322635,
            -123.098876
        ],
        [
            45.479668,
            -75.516365
        ],
        [
            42.9331,
            -81.223
        ],
        [
            45.423389,
            -75.637077
        ],
        [
            51.064484,
            -114.097198
        ],
        [
            45.331642,
            -73.281189
        ],
        [
            45.464151,
            -73.831754
        ],
        [
            44.648701,
            -63.621529
        ],
        [
            43.990762,
            -79.465437
        ],
        [
            43.755185,
            -79.440163
        ],
        [
            44.597585,
            -79.424169
        ],
        [
            45.0675,
            -64.4438
        ],
        [
            43.654145,
            -79.380054
        ],
        [
            46.2199,
            -64.5434
        ],
        [
            43.650081,
            -79.380874
        ],
        [
            49.673576,
            -124.981195
        ],
        [
            49.236827,
            -124.046602
        ],
        [
            49.280957,
            -123.118884
        ],
        [
            48.44027,
            -123.51163
        ],
        [
            49.22836,
            -122.99919
        ],
        [
            48.455097,
            -123.375602
        ],
        [
            48.453472,
            -123.393915
        ],
        [
            49.23364,
            -123.11783
        ],
        [
            43.327868,
            -79.81955
        ],
        [
            43.59224,
            -79.63909
        ],
        [
            43.59224,
            -79.63909
        ],
        [
            45.794797,
            -74.015462
        ],
        [
            50.996073,
            -114.0717
        ],
        [
            47.0545,
            -67.74549
        ],
        [
            45.44696,
            -73.61083
        ],
        [
            51.07395,
            -113.98196
        ],
        [
            49.26648,
            -123.00085
        ],
        [
            43.720831,
            -79.598969
        ],
        [
            43.865726,
            -79.291328
        ],
        [
            43.656,
            -79.38239
        ],
        [
            45.528207,
            -73.513432
        ],
        [
            43.650864,
            -79.477477
        ],
        [
            45.50062,
            -73.572298
        ],
        [
            49.187038,
            -122.845539
        ],
        [
            43.73985,
            -79.58137
        ],
        [
            43.67181,
            -79.37946
        ],
        [
            50.706775,
            -113.975027
        ],
        [
            53.523618,
            -113.61547
        ],
        [
            53.523618,
            -113.61547
        ],
        [
            50.901406,
            -114.064583
        ],
        [
            43.762877,
            -79.721915
        ],
        [
            43.91443,
            -78.957315
        ],
        [
            43.706316,
            -79.787205
        ],
        [
            43.853103,
            -79.254932
        ],
        [
            43.64731,
            -79.3797
        ],
        [
            49.697921,
            -112.840508
        ],
        [
            43.769091,
            -79.388607
        ],
        [
            53.424551,
            -113.473805
        ],
        [
            49.227783,
            -123.000133
        ],
        [
            43.516853,
            -80.237873
        ],
        [
            43.95666,
            -79.2793
        ],
        [
            51.2048,
            -113.99
        ],
        [
            43.90956,
            -78.7101
        ],
        [
            43.660726,
            -79.360155
        ],
        [
            47.55905,
            -52.75229
        ],
        [
            45.30701,
            -66.015426
        ],
        [
            43.682314,
            -79.814966
        ],
        [
            47.53551,
            -52.74438
        ],
        [
            43.75331,
            -79.35838
        ],
        [
            49.2638,
            -123.152693
        ],
        [
            45.414102,
            -75.69527
        ],
        [
            43.546109,
            -79.683678
        ],
        [
            43.647357,
            -79.51137
        ],
        [
            43.700494,
            -79.396888
        ],
        [
            43.876668,
            -79.408332
        ],
        [
            44.408342,
            -79.706679
        ],
        [
            43.52083,
            -80.23522
        ],
        [
            44.067842,
            -79.483561
        ],
        [
            43.430738,
            -80.528195
        ],
        [
            45.34701,
            -75.75946
        ],
        [
            45.26957,
            -75.74882
        ],
        [
            43.007272,
            -81.240695
        ],
        [
            42.959336,
            -81.232774
        ],
        [
            43.181663,
            -80.280711
        ],
        [
            43.85964,
            -79.038174
        ],
        [
            43.886434,
            -78.912987
        ],
        [
            43.906732,
            -78.811192
        ],
        [
            43.79812,
            -79.14758
        ],
        [
            45.933094,
            -66.662887
        ],
        [
            43.625478,
            -79.604281
        ],
        [
            43.714508,
            -79.725197
        ],
        [
            43.667137,
            -79.734993
        ],
        [
            43.6116,
            -79.5568
        ],
        [
            43.559361,
            -79.707886
        ],
        [
            43.733602,
            -79.346076
        ],
        [
            43.9326606,
            -78.8665719
        ],
        [
            44.356135,
            -79.64568
        ],
        [
            43.6791963,
            -79.3907452
        ],
        [
            47.6392,
            -65.680099
        ],
        [
            52.16738,
            -106.64173
        ],
        [
            45.852396,
            -66.476663
        ],
        [
            53.899597,
            -122.779781
        ],
        [
            49.5244,
            -115.75369
        ],
        [
            43.669566,
            -79.38652
        ],
        [
            49.282759,
            -123.134857
        ],
        [
            51.264972,
            -114.006089
        ],
        [
            43.630722,
            -79.482224
        ],
        [
            49.16386,
            -123.93468
        ],
        [
            53.628712,
            -113.542336
        ],
        [
            43.8632704,
            -79.4867139
        ],
        [
            43.74538,
            -79.69814
        ],
        [
            43.784803,
            -79.626027
        ],
        [
            44.771848,
            -63.695229
        ],
        [
            47.363623,
            -68.330727
        ],
        [
            48.955272,
            -57.943725
        ],
        [
            48.951277,
            -55.647105
        ],
        [
            48.9587212,
            -54.6137314
        ],
        [
            49.192888,
            -122.803487
        ],
        [
            48.77525,
            -123.701053
        ],
        [
            49.277671,
            -122.802901
        ],
        [
            51.053758,
            -113.979555
        ],
        [
            51.17905,
            -114.408396
        ],
        [
            43.218017,
            -79.862583
        ],
        [
            51.037489,
            -113.387845
        ],
        [
            50.572102,
            -111.897654
        ],
        [
            53.477843,
            -113.492096
        ],
        [
            49.881139,
            -97.201233
        ],
        [
            45.6264,
            -73.8496
        ],
        [
            53.017918,
            -112.856569
        ],
        [
            44.338508,
            -79.680151
        ],
        [
            45.444638,
            -73.435385
        ],
        [
            53.479823,
            -113.368722
        ],
        [
            49.996143,
            -110.647642
        ],
        [
            53.439214,
            -113.603736
        ],
        [
            43.484039,
            -79.715799
        ],
        [
            53.616791,
            -113.397049
        ],
        [
            43.733377,
            -79.766272
        ],
        [
            53.546838,
            -113.525446
        ],
        [
            51.05325,
            -113.970753
        ],
        [
            49.035605,
            -123.092488
        ],
        [
            45.404655,
            -74.04596
        ],
        [
            49.282284,
            -123.118972
        ],
        [
            44.646036,
            -63.575162
        ]]
    }
    //#endregion
    constructor(props) {
        super(props);
        this.allCoords["coords"].forEach(e => {
            this.allStores.push({ latitude: e[0], longitude: e[1] })
        });
        console.log(this.allStores)
        this.state = {
            stores: [{ lat: 47.49855629475769, lng: -122.14184416996333 },
            { latitude: 47.359423, longitude: -122.021071 },
            { latitude: 47.2052192687988, longitude: -121.988426208496 },
            { latitude: 47.6307081, longitude: -122.1434325 },
            { latitude: 47.3084488, longitude: -122.2140121 },
            { latitude: 47.5524695, longitude: -122.0425407 }],
            allStores: this.allStores
        }
    }

    displayMarkers = () => {
        return this.state.allStores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {
        return (
            <div>
                <HeaderBar page="Purchase a New Device"></HeaderBar>
                {/* <Title>STORE PAGE</Title> */}
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 43.648634, lng: -79.380424 }}
                >
                    {this.displayMarkers()}
                </Map>
                <Content>
                    <h3>Closest store</h3>
                    <img src="/img/store.PNG" alt="rogers store location" />
                    <br></br>
                    <label>Reserve at Rogers store near you</label>
                    <br></br>
                    <UnorderList>
                        <ListItem>
                            <label>130 King St W Unit CW 0.9mi</label>
                            <label>Opens 9AM Monday</label>
                            <Button
                                bg='red' darken='#8b0000'
                                style={{ float: 'right' }}
                            >Reserve </Button>
                        </ListItem>
                        <ListItem>
                            <label>130 King St W Unit CW 0.9mi</label>
                            <label>Opens 9AM Monday</label>
                            <Popup trigger={<Button bg='red' darken='#8b0000'>Reserve</Button>}
                                position="right center" modal closeOnDocumentClick>
                                <h5>Schedule a technician</h5>
                                <br />
                                <CenterBox>
                                    <label>Device: |LG Smart Bulb 9834</label>
                                    <label>Location: 130 King St W Unit CW</label>
                                    <br></br>
                                </CenterBox>
                                <ButtonMin bg='red' darken='#8b0000'>Cancel</ButtonMin>
                                <ButtonMin bg='red' darken='#8b0000'>Confirm</ButtonMin>
                            </Popup>
                        </ListItem>
                        <ListItem>
                            <label>130 King St W Unit CW 0.9mi</label>
                            <label>Opens 9AM Monday</label>
                            <Button
                                bg='red' darken='#8b0000'
                                style={{ float: 'right' }}
                            >Reserve </Button>
                        </ListItem>
                    </UnorderList>
                    <label>Or tap to buy online</label>
                    <br></br>
                    <Button bg='red' darken='#8b0000' >Shop Online</Button>
                </Content>
                <BottomBar></BottomBar>
            </div>

        )
    }
}

// export default StoreBuy;

const Content = styled.div`
            padding: 15px;
    h3,ul{
                    margin: 0;
            }
    img{
                    width:100%;
            }
        
    ul{
                    padding: 0;
                margin-bottom: 20px;
                list-style:none;
            }
        `;

// const Title = styled.h3`
//     margin: 0;
//     padding:0;
//     color: #fff;
//     line-height: 1.8em;
//     text-align:center;
//     background:#041b2b;
// `;

const CenterBox = styled.div`
            display: flex;
            flex-direction: column;
            background: #eaeef1;
            justify-content:center;
            align-items:center;
            padding-bottom:10px;
        `;

const Button = styled.button`
            width: 50%;
            font-weight: bold;
            font-size: 1.3em;
            line-height: 1.5em;
            border-radius: 5px;
            margin-bottom: 10px;
            border: none;
            color:#fff;
    background: ${props => props.bg};
            
    &:hover{
                    background: ${props => props.darken};
            }
        `;

const ButtonMin = styled.button`
            width: 30%;
            font-weight: bold;
            font-size: 0.8em;
            line-height: 1.5em;
            border-radius: 5px;
            margin-bottom: 10px;
            margin-right: 10px;
            border: none;
            color:#fff;
            background: red;
        `;
const UnorderList = styled.ul`
            margin: 0;
            padding:0;
            width: 100%;
            padding: .1em 0;
            list-style: none;
            background: #eaeef1;
            color:#727272;
        `;

const ListItem = styled.li`
            display:flex;
            width: 100%;
            padding: .9em 1.7em;
            background: #fff;
            margin: .5em 0;
            box-sizing:border-box;
            font-size: 1.2em;
            align-items:center;
        
    & i{
                    font - size: 1.8em;
                margin-right: 10px;
            }
        `;

//---- Google Maps -----//
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDNSjtPS1flmRxjviPyFAcFRTbKRymWNpY'
})(StoreBuy);

const mapStyles = {
    width: '100%',
    height: '100%',
};
//---- Google Maps -----//



