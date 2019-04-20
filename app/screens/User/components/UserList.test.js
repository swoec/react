import React from 'react';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import {getUsers, getMockUsers} from '../../../utils/user-api.stub';
import UserList from './UserList';

describe('UserList', () => {

    it('should invoke the getUser method ', () => {
        const getUserSpy = getGetUserSpy();
        mountComponent({getUsers: getUserSpy});
        expect(getUserSpy).to.have.been.calledOnce;

    });

    it('should list the Users', done => {
        const totalUsers = 3;
        const getUserSpy = getGetUserSpy(getMockUsers(totalUsers));
        const wrapper = mountComponent({getUsers: getUserSpy});
        setTimeout(() => {
            expect(wrapper.find('li')).to.have.length(totalUsers);
            done();
        });
    });

});

function mountComponent(props = {}) {
    return mount(<UserList {...getDefaultProps()} {...props} />);
}

function getDefaultProps() {
    return {

        getUsers,
    };
}

function getGetUserSpy(resolvedValue = getMockUsers()) {
    return spy(() => Promise.resolve(resolvedValue));
}
