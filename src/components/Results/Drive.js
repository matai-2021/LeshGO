import React from 'react'
import styled from 'styled-components/native'

function Drive (props) {

  const { distance, duration } = props.undefinedData.drive
  const { setTwoDecimals, selectedRoute } = props
  // const vehicleType = props.data.vehicleType

  const emmisionsCalculation = (props.data.vehicleType && props.data.mapRouteData.drivingData) ? props.data.vehicleType.emmisions * props.data.mapRouteData.drivingData.distanceKM : null

  return (
    props.data.mapRouteData.drivingData
    ? <StyledView>
        <StyledIcon>    
          {selectedRoute === 'driving'
          ? <Image source={require("../../../assets/car.gif")}/>
          : <Image source={require("../../../assets/car.png")}/>
          } 
        </StyledIcon>
        <FlexText>
         <StyledText>
            Vehicle Type: {props.data.vehicleType.name} 
         </StyledText>
         <StyledText>
            Distance: {props.data.mapRouteData.drivingData.distanceKM}KM
         </StyledText>
         <StyledText>
            Time: {props.data.mapRouteData.drivingData.durationMIN} mins
         </StyledText>
        </FlexText>
      </StyledView>

    : <StyledView>
        <StyledIcon>  
          <Image source={require("../../../assets/car.png")}/>
        </StyledIcon>
        <FlexText>
         <StyledText>
            {props.data.vehicleType
              ? props.data.vehicleType.name
              : 'Please select vehicle type'}
         </StyledText>
         <StyledText>
         Distance: <GreyText>{distance}</GreyText>
          </StyledText>
          <StyledText>
          Time: <GreyText>{duration}</GreyText>
         </StyledText>
        </FlexText>
      </StyledView>
  
  )
}


const StyledText = styled.Text`
  flex: 1;
  font-size: 16px;
  justifyContent: center;
`

const GreyText = styled.Text`
  flex: 1;
  font-size: 16px;
  padding: 1%;
  color: lightgrey;
`

const StyledView = styled.View`
flex: 1;
flex-direction: row;
alignItems: center;
`

const FlexText = styled.View`
flex: 4;
flex-direction: column;
height: 100%;
padding-top: 1%;
padding-bottom: 1%;
`

const StyledIcon = styled.View`
flex: 1;
height: 100%;
alignItems: center;
justifyContent: center;
padding-left: 5%;
padding-right: 5%;
`
const Image = styled.Image`
height: 40%;
width: 45%;
`


export default Drive
