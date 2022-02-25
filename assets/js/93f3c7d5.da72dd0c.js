"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[912],{71779:function(e){e.exports=JSON.parse('{"functions":[{"name":"__call ","desc":"Constructs a PageCursor object.","params":[{"name":"_","desc":"","lua_type":"PageCursor"},{"name":"Client","desc":"The client to make requests with.","lua_type":"Client"},{"name":"Endpoint","desc":"The endpoint to get pages from.","lua_type":"string"},{"name":"Tags","desc":"Optional list of tags to add on to the request.","lua_type":"{[string]=any}"},{"name":"Interpret","desc":"The function that interprets recieved data, to turn it into a useable format.","lua_type":"function"},{"name":"SortOrder","desc":"The sort order to use when requesting for pages. Can be \\"Asc\\" or \\"Desc\\".","lua_type":"string?"},{"name":"Limit","desc":"The page item limit to use when requesting pages.","lua_type":"number?"},{"name":"PageDataLocation","desc":"The location where page data is located for non-standard pages.","lua_type":"string?"},{"name":"PageNextLocation","desc":"The location where the next page cursor is found for non-standard pages.","lua_type":"string?"},{"name":"PagePreviousLocation","desc":"The location where the previous page cursor is found for non-standard pages.","lua_type":"string?"},{"name":"CursorTag","desc":"The name of the tag to send the cursor for non-standard pages.","lua_type":"string?"},{"name":"LimitTag","desc":"The name of the tag to send the limit for non-standard pages.","lua_type":"string?"},{"name":"SortOrderTag","desc":"The name of the tag to send the sort order for non-standard pages.","lua_type":"string?"}],"returns":[{"desc":"","lua_type":"PageCursor"}],"function_type":"static","source":{"line":132,"path":"libs/util/pages.lua"}},{"name":"Next ","desc":"This gets the next page and returns it.","params":[],"returns":[{"desc":"","lua_type":"{<T>}"}],"function_type":"method","source":{"line":161,"path":"libs/util/pages.lua"}},{"name":"Previous ","desc":"This gets the previous page and returns it.","params":[],"returns":[{"desc":"","lua_type":"{<T>}"}],"function_type":"method","source":{"line":192,"path":"libs/util/pages.lua"}}],"properties":[{"name":"Client","desc":"A reference back to the client that owns this object.","lua_type":"Client","readonly":true,"source":{"line":7,"path":"libs/util/pages.lua"}},{"name":"Endpoint","desc":"The URL to send requests to.","lua_type":"string","readonly":true,"source":{"line":13,"path":"libs/util/pages.lua"}},{"name":"Tags","desc":"The URL to send requests to.","lua_type":"{[string]=any}","readonly":true,"source":{"line":19,"path":"libs/util/pages.lua"}},{"name":"Interpret","desc":"The function that parses return data to turn it into a usable form.","lua_type":"function","readonly":true,"source":{"line":25,"path":"libs/util/pages.lua"}},{"name":"SortOrder","desc":"The sort order sent with the request.","lua_type":"\\"Asc\\"|\\"Desc\\"","readonly":true,"source":{"line":31,"path":"libs/util/pages.lua"}},{"name":"Limit","desc":"The number of items that should be sent with each page.","lua_type":"number","readonly":true,"source":{"line":37,"path":"libs/util/pages.lua"}},{"name":"PageDataLocation","desc":"The location where data is found for non-standard pages.","lua_type":"string","readonly":true,"source":{"line":43,"path":"libs/util/pages.lua"}},{"name":"PageNextLocation","desc":"The location where the next page cursor is found for non-standard pages. ","lua_type":"string","readonly":true,"source":{"line":49,"path":"libs/util/pages.lua"}},{"name":"PageNextLocation","desc":"The location where the next page cursor is found for non-standard pages. ","lua_type":"string","readonly":true,"source":{"line":55,"path":"libs/util/pages.lua"}},{"name":"PagePreviousLocation","desc":"The location where the previous page cursor is found for non-standard pages. ","lua_type":"string","readonly":true,"source":{"line":61,"path":"libs/util/pages.lua"}},{"name":"CursorTag","desc":"The querystring name of the cursor for non-standard pages.","lua_type":"string","readonly":true,"source":{"line":67,"path":"libs/util/pages.lua"}},{"name":"LimitTag","desc":"The querystring name of the limit for non-standard pages.","lua_type":"string","readonly":true,"source":{"line":73,"path":"libs/util/pages.lua"}},{"name":"SortOrderTag","desc":"The querystring name of the sort order for non-standard pages.","lua_type":"string","readonly":true,"source":{"line":79,"path":"libs/util/pages.lua"}},{"name":"LastPage","desc":"If the page you are currently on is the last page.","lua_type":"boolean","readonly":true,"source":{"line":85,"path":"libs/util/pages.lua"}},{"name":"FirstPage","desc":"If the page you are currently on is the first page.","lua_type":"boolean","readonly":true,"source":{"line":91,"path":"libs/util/pages.lua"}},{"name":"NextCursor","desc":"The cursor for the next page.","lua_type":"string?","readonly":true,"source":{"line":97,"path":"libs/util/pages.lua"}},{"name":"PreviousCursor","desc":"The cursor for the previous page.","lua_type":"string?","readonly":true,"source":{"line":103,"path":"libs/util/pages.lua"}}],"types":[],"name":"PageCursor","desc":"The object represents roblox pagination, many endpoints have thousands of data points,\\nand it would be too expensive to send them all in one document, so they are sent in\\nmanagable clusters called pages.\\n\\nThis class manages cursor-based pagination.","source":{"line":112,"path":"libs/util/pages.lua"}}')}}]);