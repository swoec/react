/* eslint camelcase:0 */
import React from 'react';
import {render} from 'enzyme';
import {getMockUser} from '../../../utils/user-api.stub';
import UserListItem from './UserListItem';

describe('UserListItem', () => {
    it('should get the items', () => {

        const users = getMockUser();
        const wrapper = render(<UserListItem user={users} />);
        const timeEl = wrapper.find('li');
        expect(timeEl).to.not.equal(null);
    });
});
