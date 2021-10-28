/******/
(() => { // webpackBootstrap
    /******/
    "use strict";
    var __webpack_exports__ = {};
    /*!******************************************************************************!*\
      !*** ../demo1/src/js/pages/crud/datatables/data-sources/ajax-server-side.js ***!
      \******************************************************************************/

    var UserTable = function() {

        var initTable1 = function() {
            var table = $('#kt_datatable');

            // begin first table
            table.DataTable({
                responsive: true,
                searchDelay: 500,
                processing: true,
                serverSide: true,
                ajax: {
                    url: 'users/getUserList',
                    type: 'POST',
                    headers: {
                        'x-csrf-token': _token,
                    },
                    data: {
                        // parameters for custom backend script demo
                        // columnsDef: [
                        //     'email', 'name',
                        //     'subscription', 'expire_date', 'total_revenue',
                        //     'credit', 'status', 'Actions'
                        // ],
                    },
                },
                columns: [
                    { data: 'email' },
                    { data: 'name' },
                    { data: 'subscription_plan' },
                    { data: 'expire_date' },
                    { data: 'total_revenue' },
                    { data: 'credit' },
                    { data: 'status', textAlign: 'center' },
                    { data: null },
                ],
                columnDefs: [{
                        targets: -1,
                        title: 'Actions',
                        orderable: false,
                        render: function(data, type, full, meta) {
                            return '\
							<div class="dropdown dropdown-inline">\
								<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" data-toggle="dropdown">\
	                                <i class="la la-cog"></i>\
	                            </a>\
							  	<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
									<ul class="nav nav-hoverable flex-column">\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-edit"></i><span class="nav-text">Edit Details</span></a></li>\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-leaf"></i><span class="nav-text">Update Status</span></a></li>\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-print"></i><span class="nav-text">Print</span></a></li>\
									</ul>\
							  	</div>\
							</div>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Edit details">\
								<i class="la la-edit"></i>\
							</a>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\
								<i class="la la-trash"></i>\
							</a>\
						';
                        },
                    },
                    {
                        width: '75px',
                        targets: -2,
                        orderable: false,
                        textAlign: 'center',
                        render: function(data, type, full, meta) {
                            if (data == null && data == 0) {
                                return '<input type="checkbox" name="Checkboxes1">';
                            } else {
                                return '' +
                                    '<input type="checkbox" checked="checked" name="Checkboxes1">' +
                                    '';
                            }

                        },
                    },
                ],
                default: {
                    first: '<<',
                    prev: 'Previous',
                    next: 'Next',
                    last: 'Last',
                    more: 'More pages',
                    input: 'Page number',
                    select: 'Select page size'
                }
            });
        };

        return {
            //main function to initiate the module
            init: function() {
                initTable1();
            },

        };

    }();

    jQuery(document).ready(function() {
        UserTable.init();
    });

    /******/
})();
//# sourceMappingURL=ajax-server-side.js.map