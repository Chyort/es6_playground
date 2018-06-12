import { addParagraph }  from "./helpers";
import SuperPerson from './person'

const lou = new SuperPerson('Lou', 'see with my own eyeballs');

addParagraph(lou.talk('I like turtles!'));

addParagraph(lou.saySuperPower('see with my own eyeballs'));