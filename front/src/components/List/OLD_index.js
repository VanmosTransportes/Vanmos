import React from 'react'

import {
        List,
        ListItem,
        ListText,
        ListIcon,
        ListArrow
} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Menu( props ){
    const { list, icon } = props
    return(
        <List>
            { list.map((item, i) =>
                <ListItem key={`listItem-${i}`} onPress={() => {}}>
                    {icon && <ListIcon source={props.photo} />}
                    <ListText>{item.title}</ListText>
                    <ListArrow>
                        <Icon name="keyboard-arrow-right" size={20} color="#000" />
                    </ListArrow>
                </ListItem>
            ) }
        </List>
    );
}

Menu.defaultProps = {
    title: 'Guilherme Guedes',
    photo: {uri: 'data:image/jpeg;base64,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'}
}