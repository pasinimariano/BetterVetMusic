import React, { useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';


export const PickerView = ({
    categories,
    setCategory,
    category,
    searchByCategory,
    Styles
}) => {

    return (
        <Picker
          style= {Styles.picker}
          selectedValue= {category}
          onValueChange={(itemValue) =>
          setCategory(itemValue)
        }>
              <Picker.Item
                  style= {Styles.pickerItem}
                  label= 'Select category'
                  value= ''
              />
              <Picker.Item
                  style= {Styles.pickerItem}
                  label= 'All'
                  value= 'All'
              />
              {
                categories.length !== 0
                ?
                (
                    categories.map(cat =>{
                        return (
                            <Picker.Item
                                key= {cat}
                                style= {Styles.pickerItem}
                                label= {cat}
                                value= {cat}
                            />
                        )
                    })
                ): null
              }
        </Picker>
    )
}