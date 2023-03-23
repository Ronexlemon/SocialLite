//SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract SocialLite {
    using SafeMath for uint;

    //struct information
    struct Vote {
        uint upvote;
        uint downvote;
    }
    struct Message {
        address owner;
        string information;
        uint messageIndex;
        uint numberOfInteraction;
        uint upVote;
        uint downVote;
    }
    struct Comment {
        address commentor;
        string _comment;
    }
    //collect of the information in the application
    uint numberOfMessages;
    uint numberOfComments;
    // mapping
    mapping(uint => Message) public messages;
    mapping(uint => mapping(uint => Comment)) public commentsUnderMessage;
    mapping(uint => Vote) public voting;
    mapping(address => bool) public hasVote;

    //getmessage for all
    function getMessage(string calldata _information) public {
        require(bytes(_information).length > 0, "empty value");
        uint index = numberOfMessages;
        messages[index] = Message(
            msg.sender,
            _information,
            index,
            numberOfMessages,
            0,
            0
        );

        numberOfMessages = numberOfMessages.add(1);
    }

    //writeComment Under Message
    function writeComment(uint _index, string calldata _comment) public {
        require(bytes(_comment).length > 0, "no comment");
        uint commentNumber = numberOfComments;
        commentsUnderMessage[_index][commentNumber] = Comment(
            msg.sender,
            _comment
        );
        numberOfComments = numberOfComments.add(1);
    }

    //readmessages for all
    function readmessages() public view returns (Message[] memory message) {
        message = new Message[](numberOfMessages);

        for (uint index = 0; index < numberOfMessages; index++) {
            message[index] = messages[index];
        }
    }

    //readcomment under message for all
    function readComments(
        uint _index
    ) public view returns (Comment[] memory comment) {
        comment = new Comment[](numberOfComments);

        for (uint index = 0; index < numberOfComments; index++) {
            comment[index] = commentsUnderMessage[_index][index];
        }
    }

    //upvoteand downvote
    function upvoteOrdownvote(bool choice, uint _index) public {
        require(hasVote[msg.sender] == false, "already voted");
        if (choice == true) {
            _upvote(_index);
        } else {
            _downvote(_index);
        }
    }

    //upvote
    function _upvote(uint _index) private {
        messages[_index].upVote = messages[_index].upVote.add(1);
        hasVote[msg.sender] = true;
    }

    //upvote
    function _downvote(uint _index) private {
        messages[_index].downVote = messages[_index].downVote.add(1);
        hasVote[msg.sender] = true;
    }

    //return all trending posts
    function trendingPosts() public view returns (Message[] memory message) {
        uint trending = 0;

        for (uint i; i < numberOfMessages; i++) {
            if (messages[i].upVote > 0 || messages[i].downVote > 0) {
                trending = trending.add(1);
            }
        }
        message = new Message[](trending);
        for (uint i = 0; i < trending; i++) {
            if (messages[i].upVote > 0 || messages[i].downVote > 0) {
                message[i] = messages[i];
            }
        }
    }

    //readIndividual Message
    function readindividualMessage()
        public
        view
        returns (Message[] memory message)
    {
        uint usermessages = 0;

        for (uint i; i < numberOfMessages; i++) {
            if (messages[i].owner == msg.sender) {
                usermessages = usermessages.add(1);
            }
        }
        message = new Message[](usermessages);
        for (uint i = 0; i < usermessages; i++) {
            if (messages[i].owner == msg.sender) {
                message[i] = messages[i];
            }
        }
    }
}
