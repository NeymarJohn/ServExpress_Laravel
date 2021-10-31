"use strict";
// Class definition

var KTDatatableRemoteAjaxDemo = function() {
    // Private functions

    // basic demo
    var demo = function() {

        var datatable = $('#kt_datatable').KTDatatable({
            // datasource definition
            data: {
                type: 'remote',
                source: {
                    read: {
                        url: HOST_URL + '/api/datatables/demos/default.php',
                        // sample custom headers
                        // headers: {'x-my-custom-header': 'some value', 'x-test-header': 'the value'},
                        map: function(raw) {
                            // sample data mapping
                            var dataSet = raw;
                            if (typeof raw.data !== 'undefined') {
                                dataSet = raw.data;
                            }
                            return dataSet;
                        },
                    },
                },
                pageSize: 10,
                serverPaging: true,
                serverFiltering: true,
                serverSorting: true,
            },

            // layout definition
            layout: {
                scroll: false,
                footer: false,
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [{
                field: 'RecordID',
                title: '#',
                sortable: 'asc',
                width: 30,
                type: 'number',
                selector: false,
                textAlign: 'center',
            }, {
                field: 'CompanyAgent',
                title: 'Name',
            }, {
                field: 'Department',
                title: 'Keyword',
            }, {
                field: 'Country',
                title: 'Country',
            }, {
                field: 'Actions',
                title: 'Member of Searches',
                template: function(row) {
                    return "<span class='text-primary'>50 Searchs/day</span>";
                }
            }, {
                field: 'Status',
                title: 'Status',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                    var status = {
                        1: {
                            'title': 'Pending',
                            'class': ' label-light-success'
                        },
                        2: {
                            'title': 'Active',
                            'class': ' label-light-danger'
                        },
                        3: {
                            'title': 'Active',
                            'class': ' label-light-primary'
                        },
                        4: {
                            'title': 'Active',
                            'class': ' label-light-success'
                        },
                        5: {
                            'title': 'Active',
                            'class': ' label-light-info'
                        },
                        6: {
                            'title': 'Active',
                            'class': ' label-light-danger'
                        },
                        7: {
                            'title': 'Active',
                            'class': ' label-light-warning'
                        },
                    };
                    return '<span class="label font-weight-bold label-lg ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
                },
            }, ],

        });

        $("#kt_datatable").on('click', 'tbody tr', function() {
            // var row = datatable.row(this);
            // console.log(row);
            // var rowData = datatable.row(this).data();
            // console.log(rowData);
            document.location.href = "/campaign/detail";
        });
    };

    return {
        // public functions
        init: function() {
            demo();
        },
    };
}();

jQuery(document).ready(function() {
    KTDatatableRemoteAjaxDemo.init();
});