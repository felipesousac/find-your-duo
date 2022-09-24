import React from 'react'
import { View } from 'react-native'
import { THEME } from '../../theme'
import { DuoInfo } from '../DuoInfo'

import { styles } from './styles'

export interface DuoCardProps {}

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo label="nome" value="diego fernandes" />
      <DuoInfo label="nome" value="felipe sousa" />
      <DuoInfo label="nome" value="claudio leite" />
      <DuoInfo label="nome" value="cloro morde" colorValue="red" />
    </View>
  )
}
