import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

function Drive () {
  return (
    <View>
      <StyledText>
        DRIVING
      </StyledText>
    </View>
  )
}

const StyledText = styled.Text`
  color: green;
`

export default Drive