"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[157],{88444:function(e){e.exports=JSON.parse('{"functions":[{"name":"__call ","desc":"Constructs a JoinRequest object, returns nil if there is no join request by that user\\nfor the group.","params":[{"name":"_","desc":"","lua_type":"JoinRequest"},{"name":"Client","desc":"The client to make requests with.","lua_type":"Client"},{"name":"GroupId","desc":"The Group or GroupId the join request is for.","lua_type":"Group|number"},{"name":"UserId","desc":"The User or UserId that made the join request.","lua_type":"User|number"},{"name":"Data","desc":"Optional preset data. Used within the library, not meant for general use.","lua_type":"{[any]=any}"}],"returns":[{"desc":"","lua_type":"JoinRequest?"}],"function_type":"static","source":{"line":39,"path":"libs/group/joinRequest.lua"}},{"name":"Accept ","desc":"Accepts the join request, allowing the user into the group. Returns\\nif the operation was successful.","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":84,"path":"libs/group/joinRequest.lua"}},{"name":"Decline ","desc":"Declines the join request. Returns if the operation was successful.","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":94,"path":"libs/group/joinRequest.lua"}}],"properties":[{"name":"Client","desc":"A reference back to the client that owns this object.","lua_type":"Client","readonly":true,"source":{"line":9,"path":"libs/group/joinRequest.lua"}},{"name":"Requester","desc":"The user that made the request.","lua_type":"User","readonly":true,"source":{"line":15,"path":"libs/group/joinRequest.lua"}},{"name":"Created","desc":"When the join request was made (unix time).","lua_type":"number","readonly":true,"source":{"line":21,"path":"libs/group/joinRequest.lua"}}],"types":[],"name":"JoinRequest","desc":"This object represents a group join request.","source":{"line":26,"path":"libs/group/joinRequest.lua"}}')}}]);