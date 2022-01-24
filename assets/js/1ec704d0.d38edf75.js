"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[497],{75155:function(e){e.exports=JSON.parse('{"functions":[{"name":"__call ","desc":"Constructs a member object.","params":[{"name":"_","desc":"","lua_type":"Member"},{"name":"Client","desc":"The client to make requests with.","lua_type":"Client"},{"name":"GroupId","desc":"The Group or GroupId the member belongs to.","lua_type":"Group|number"},{"name":"UserId","desc":"The User or UserId the member object represents.","lua_type":"User|number"},{"name":"Data","desc":"Optional preset data. Used within the library, not meant for general use.","lua_type":"{[any]=any}"}],"returns":[{"desc":"","lua_type":"Member"}],"function_type":"static","source":{"line":46,"path":"libs/group/member.lua"}},{"name":"GetRole ","desc":"Gets the role of the member in the group.","params":[],"returns":[{"desc":"","lua_type":"Role?"}],"function_type":"method","source":{"line":82,"path":"libs/group/member.lua"}},{"name":"SetRole ","desc":"Sets the role of the member in the group.","params":[{"name":"Role","desc":"The Role or RoleId to set the user to.","lua_type":"Role|number"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":100,"path":"libs/group/member.lua"}},{"name":"Exile ","desc":"Exiles the member from the group.","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":112,"path":"libs/group/member.lua"}}],"properties":[{"name":"User","desc":"The user that the member object represents.","lua_type":"User","readonly":true,"source":{"line":7,"path":"libs/group/member.lua"}},{"name":"Group","desc":"The group that the user is in.","lua_type":"Group","readonly":true,"source":{"line":13,"path":"libs/group/member.lua"}},{"name":"Client","desc":"A reference back to the client that owns this object.","lua_type":"Client","readonly":true,"source":{"line":19,"path":"libs/group/member.lua"}},{"name":"Role","desc":"The role the user has in the group.","lua_type":"Role","readonly":true,"source":{"line":25,"path":"libs/group/member.lua"}}],"types":[],"name":"Member","desc":"The member object can view and edit data about users in groups.","source":{"line":30,"path":"libs/group/member.lua"}}')}}]);