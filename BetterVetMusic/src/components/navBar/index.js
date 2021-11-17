import React from 'react';
import { View, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home  from '../../pages/home';
import Search from '../../pages/search';
import Albums from '../../pages/albums';
import { Styles } from './styles/navStyles';


const Tab = createMaterialBottomTabNavigator();

export const NavBar = () => {

    const iconHome = '../../assets/icons/homeIcon.png';
    const iconAll = '../../assets/icons/allIcon.png';
    const iconSearch = '../../assets/icons/searchIcon.png';

    return (
        <Tab.Navigator
               labeled= {false}
               barStyle={Styles.mainContainer}
        >
            <Tab.Screen component= {Home} name= 'Home' options= {{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require(iconHome)}
                            resizeMode= 'contain'
                            style= {{
                                ...Styles.icon,
                                tintColor: focused ? '#368b85' : '#f1e9e5'
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen component= {Albums} name= 'All' options= {{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require(iconAll)}
                            resizeMode= 'contain'
                            style= {{
                                ...Styles.icon,
                                tintColor: focused ? '#368b85' : '#f1e9e5'
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen component= {Search} name= 'Search' options= {{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require(iconSearch)}
                            resizeMode= 'contain'
                            style= {{
                                ...Styles.icon,
                                tintColor: focused ? '#368b85' : '#f1e9e5'
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}