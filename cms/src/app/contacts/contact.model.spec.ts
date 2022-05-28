import { Contact } from './contact.model';

describe('Contact', () => {
  it('should create an instance', () => {
    expect(new Contact(1, 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', '../assets/images/jacksonk.jpg', null )).toBeTruthy();
  });
});
