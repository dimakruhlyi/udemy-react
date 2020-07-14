import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FilteredList, App} from './index';

configure({
    adapter: new Adapter()
})

describe(<FilteredList />, () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FilteredList />);
    })  

    it('Should render 3 characters in light side', () => {
        expect(wrapper.find(App)).toHaveLength(3)
    })

    it('Should render 2 characters in dark side', () => {
        wrapper.setProps({
            side: 'dark'
        })
        expect(wrapper.find(App)).toHaveLength(2)
    })
})