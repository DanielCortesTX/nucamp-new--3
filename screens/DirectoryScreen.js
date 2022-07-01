import { FlatList, Text, View } from 'react-native';
import { Tile } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import * as Animatable from 'react-native-animatable';

const DirectoryScreen = ({ navigation }) => {
    const campsites = useSelector((state) => state.campsites);

    if (campsites.isLoading) {
        return <Loading />;
    }
    if (campsites.errMess) {
        return (
            <View>
                <Text>{campsites.errMess}</Text>
            </View>
        );
    }

    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <Animatable.View animation='fadeInRightBig' duration={2000}>
                <Tile
                    title={campsite.name}
                    caption={campsite.description}
                    featured
                    onPress={() =>
                        navigation.navigate('CampsiteInfo', { campsite })
                    }
                    imageSrc={{ uri: baseUrl + campsite.image }}
                />
            </Animatable.View>
        );
    };
    return (
        <FlatList
            data={campsites.campsitesArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;
























// import { useState } from 'react';
// import { FlatList } from 'react-native';
// import { Avatar, ListItem } from 'react-native-elements';
// import { CAMPSITES } from '../shared/campsites';

// const DirectoryScreen = ({ navigation }) => {
//     const [campsites, setCampsites] = useState(CAMPSITES);

//     const renderDirectoryItem = ({ item: campsite }) => {
//         return (
//             <ListItem
//                 onPress={() =>
//                     navigation.navigate('CampsiteInfo', { campsite })
//                 }
//             >
//                 <Avatar source={campsite.image} rounded />
//                 <ListItem.Content>
//                     <ListItem.Title>{campsite.name}</ListItem.Title>
//                     <ListItem.Subtitle>
//                         {campsite.description}
//                     </ListItem.Subtitle>
//                 </ListItem.Content>
//             </ListItem>
//         );
//     };
//     return (
//         <FlatList
//             data={campsites}
//             renderItem={renderDirectoryItem}
//             keyExtractor={(item) => item.id.toString()}
//         />
//     );
// };

// export default DirectoryScreen;