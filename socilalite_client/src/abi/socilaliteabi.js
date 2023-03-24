export const SocialAbi =[
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "commentsUnderMessage",
      "outputs": [
        {
          "internalType": "address",
          "name": "commentor",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_comment",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_information",
          "type": "string"
        }
      ],
      "name": "getMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "hasVote",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "messages",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "information",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "messageIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "numberOfInteraction",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "upVote",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "downVote",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "readComments",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "commentor",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "_comment",
              "type": "string"
            }
          ],
          "internalType": "struct SocialLite.Comment[]",
          "name": "comment",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "readindividualMessage",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "information",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "messageIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "numberOfInteraction",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "upVote",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "downVote",
              "type": "uint256"
            }
          ],
          "internalType": "struct SocialLite.Message[]",
          "name": "message",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "readmessages",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "information",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "messageIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "numberOfInteraction",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "upVote",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "downVote",
              "type": "uint256"
            }
          ],
          "internalType": "struct SocialLite.Message[]",
          "name": "message",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "trendingPosts",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "information",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "messageIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "numberOfInteraction",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "upVote",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "downVote",
              "type": "uint256"
            }
          ],
          "internalType": "struct SocialLite.Message[]",
          "name": "message",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "choice",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "upvoteOrdownvote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "voting",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "upvote",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "downvote",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_comment",
          "type": "string"
        }
      ],
      "name": "writeComment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
