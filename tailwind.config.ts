<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Insurance Cards</title>
    <link rel="stylesheet" href="Styles/bootstrap.min.css" />
    <link rel="stylesheet" href="../Mplusreferences/assets/css/main_style.css">
    <link href="../Mplusreferences/assets/fonts/fonts/font-awesome.min.css" rel="stylesheet">
    <link href="../mplusreferences/assets/css/jquery-ui-1.10.4.custom.css" rel="stylesheet" />
    <link rel="stylesheet" href="Styles/new-stylepop.css">
    <link href="../MPlusReferences/Plugins/toastr/toastr-master/build/toastr.css" rel="stylesheet" />
    <link href="../MPlusReferences/Plugins/bootstrap/bootstrap-3.3.7-dist/css/daterangepicker.css" rel="stylesheet" />
    <style>
        div#ui-datepicker-div {
            z-index: 9999999999 !important;
        }
        .modal-dialog {
            width: 90%;
            left: unset;
        }
        .modal-header .close {
            padding: unset;
            margin: unset;
        }
        td input {
            width: 100%;
        }
        .show {
            opacity: 1;
            display: block !important;
        }
        div#AutoFillModal {
            z-index: 999999999;
        }
    </style>
</head>
<body>
    <div class="demo">
        <div class="container-fluid" style="height: 92vh; overflow: auto; padding-bottom: 30px;">
            <div class="row">
                <div class="col-lg-12">
                    <div class="headerbanner blue">
                        <div class="headerbanner-header row">
                            <div class="col-3">
                                <p>Patient Name: <span data-bind="text: PatientName" class="value-datan"></span> </p>
                            </div>
                            <div class="col-2">
                                <p>Patient ID: <span data-bind="text: PatientID" class="value-datan"></span> </p>
                            </div>
                            <div class="col-3">
                                <p>Insurer Name: <span data-bind="text: InsurerName" class="value-datan"></span> </p>
                            </div>
                            <div class="col-3">
                                <p>Payer Name: <span data-bind="text: PayerName" class="value-datan"></span> </p>
                            </div>
                        </div>
                        <a href="#" class="headerbanner-add addes">Add new card</a>
                    </div>
                </div>
            </div>
            <div class="hiidenblo" style="display:none;">
                <div class="bg-white p-3">
                    <div class="row">
                        <div class="col-lg-12">
                            <b>Insurance Card Information</b>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <label for="validationTooltip04">Card Number</label>
                            <input type="text" class="form-control" id="validationTooltip04" required>
                        </div>
                        <div class="col-md-3">
                            <label for="validationTooltip01">Policy Number</label>
                            <select class="form-control"></select>
                        </div>
                        <div class="col-md-3">
                            <label for="validationTooltip01">Start Date</label>
                            <input type="text" class="form-control datepicker" id="StartDate" required>
                        </div>
                        <div class="col-md-3">
                            <label for="validationTooltip01">Expiry Date</label>
                            <input type="text" class="form-control datepicker" id="ExpiryDate" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div style="margin-top: 10px;">
                                <b>Outpatient</b>
                            </div>
                            <div class="col-md-4">
                                <label for="validationTooltip03">Outpatient Deductible Type</label>
                                <select class="form-control"></select>
                            </div>
                            <div class="col-md-4">
                                <label for="validationTooltip06">Outpatient Deductible</label>
                                <input type="number" min="0" class="form-control" id="validationTooltip06" required>
                            </div>
                            <div class="col-md-4">
                                <label for="validationTooltip01">Outpatient Coverage Limit</label>
                                <input type="number" min="0" class="form-control" id="validationTooltip02" required>
                            </div>
                        </div>
                        <div class="col-md-6" style="margin-top: 10px;">
                            <div><b>Inpatient</b></div>
                            <div class="col-md-4">
                                <label for="validationTooltip03">Inpatient Deductible Type</label>
                                <select class="form-control"></select>
                            </div>
                            <div class="col-md-4">
                                <label for="validationTooltip06">Inpatient Deductible</label>
                                <input type="number" min="0" class="form-control" id="validationTooltip06" required>
                            </div>
                            <div class="col-md-4">
                                <label for="validationTooltip01">Inp. Insurance Coverage Limit</label>
                                <input type="number" min="0" class="form-control" id="validationTooltip02" required>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="col-md-12 bg-white p-2 mb-3">
                    <div class="row mx-2">
                        <div class="col-lg-12"><b>Co-payment Information</b></div>
                    </div>
                    <div class="row mx-2">
                        <div class="col-md-2">
                            <label>Service Type</label>
                            <select class="form-control"></select>
                        </div>
                        <div class="col-md-2">
                            <label>Service Group</label>
                            <select class="form-control"></select>
                        </div>
                        <div class="col-md-2">
                            <label>Visit Type</label>
                            <select class="form-control"></select>
                        </div>
                        <div class="col-md-2">
                            <label for="validationTooltip01">Co-pay Type</label>
                            <select class="form-control"></select>
                        </div>
                        <div class="col-md-2">
                            <label for="validationTooltip04">Co-pay Value</label>
                            <input type="number" min="0" class="form-control" id="validationTooltip04" required>
                        </div>
                        <div class="col-md-1 text-center">
                            <label for="validationTooltip04" style="display: block;">On Gross</label>
                            <input style="margin-top: 13px;" type="checkbox" />
                        </div>
                    </div>
                    <div class="row mx-2">
                        <div class="col-md-2">
                            <label for="validationTooltip04">Additional Fix Amount</label>
                            <input type="number" min="0" class="form-control" id="validationTooltip04" required>
                        </div>
                        <div class="col-md-2">
                            <label for="validationTooltip04">Co-pay Ceiling</label>
                            <input type="number" min="0" class="form-control" id="validationTooltip04" required>
                        </div>
                        <div class="col-1 mb-1 text-center">
                            <label class="d-block mb-1" for="validationTooltip04">Separate Ceiling</label>
                            <input type="checkbox" id="validationTooltip04">
                        </div>
                        <div class="col-md-1 text-center">
                            <label for="" style="display:block;">Each time with each service</label>
                            <input style="margin-top: 13px;" type="checkbox" />
                        </div>
                        <div class="col-3 mb-1">
                            <label>Benefit</label>
                            <select class="form-control"></select>
                        </div>
                    </div>
                    <div style="text-align:center; margin-bottom: -36px;">
                        <button class="btn btn-sm headerbanner-add assign cblue">Add</button>
                    </div>
                    <hr />
                    <div class="tbl-content" style="height: 156px;">
                        <table cellpadding="0" cellspacing="0">
                            <thead class="tbl-header">
                                <tr>
                                    <th width="25%">Service Type</th>
                                    <th width="20%">Service Group</th>
                                    <th>Visit Type</th>
                                    <th>Co-Pay Type</th>
                                    <th>Co-Pay Value</th>
                                    <th>Co-Pay Ceiling</th>
                                    <th>Separate Ceiling</th>
                                    <th>Each time with each service</th>
                                    <th>On Gross</th>
                                    <th>Add Fix Amount</th>
                                    <th>Benefit</th>
                                    <th width="7%">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><label>Service Type</label></td>
                                    <td><label>Service Group</label></td>
                                    <td><label>Visit Type</label></td>
                                    <td><label>Co-Pay Type</label></td>
                                    <td><label>Co-Pay Value</label></td>
                                    <td><label>Co-Pay Ceiling</label></td>
                                    <td><label>Separate Ceiling</label></td>
                                    <td><label>Each time with each service</label></td>
                                    <td><label>On Gross</label></td>
                                    <td><label>Add Fix Amount</label></td>
                                    <td><label>Benefit</label></td>
                                    <td class="actionss actiontd">
                                        <span><i class="fa fa-trash"></i></span>
                                        <span><i class="fa fa-paperclip"></i></span>
                                        <span><i class="fa fa-edit"></i></span>
                                        <span><i class="fa fa-save"></i></span>
                                        <span><i class="fa fa-cogs"></i></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style="text-align: center; margin-bottom: -22px;">
                        <button class="btn btn-sm btn-success margi" type="submit">Save</button>
                    </div>
                </div>
            </div>
            <br />
            <div class="bg-white">
                <div class="p-2">
                    <b>Insurance Cards</b>
                </div>
                <table class="table table-bordered table-condensed table-striped bg-white">
                    <thead>
                        <tr>
                            <th>Card Number</th>
                            <th>Policy #</th>
                            <th>Start Date</th>
                            <th>Expiry Date</th>
                            <th>Out. Deductible Type</th>
                            <th>Out. Deductible</th>
                            <th>Out. Coverage Limit</th>
                            <th>Inp. Deductible Type</th>
                            <th>Inp. Deductible</th>
                            <th>Inp. Coverage Limit</th>
                            <th class="actiontd">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label>Card Number</label><input /></td>
                            <td><label>Policy Number</label></td>
                            <td><label>Start Date</label><input class="form-control InsCardExpDateEdit" type="text"></td>
                            <td><label>Expiry Date</label><input class="form-control InsCardExpDateEdit" type="text"></td>
                            <td><label>Out. Deductible Type</label></td>
                            <td><label>Out. Deductible</label></td>
                            <td><label>Out. Coverage Limit</label></td>
                            <td><label>Inp. Deductible Type</label></td>
                            <td><label>Inp. Deductible</label></td>
                            <td><label>Inp. Coverage Limit</label></td>
                            <td class="actionss actiontd">
                                <span><i class="fa fa-trash"></i></span>
                                <span><i class="fa fa-paperclip"></i></span>
                                <span><i class="fa fa-edit"></i></span>
                                <span><i class="fa fa-save"></i></span>
                                <span><i class="fa fa-cogs"></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div style="margin-top: 10px; text-align: center;">
            <button type="button" class="btn btn-sm btn-success margi" data-dismiss="modal">Confirm</button>
            <button type="button" class="btn btn-danger btn-sm margi">Close</button>
        </div>
    </div>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document" style="left:unset">
            <div class="modal-content">
                <div class="modal-header bavdrt">
                    <h5 class="modal-title">Delete Card</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">Are you sure you want to delete this insurance card?</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade modal--first" id="deletePaymentData" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document" style="left:unset">
            <div class="modal-content">
                <div class="modal-header bavdrt">
                    <h5 class="modal-title">Delete Payment Data</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">Are you sure you want to delete this co-payment data?</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="Attachmodal" tabindex="-1" role="dialog" aria-labelledby="AttachmodalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered mymodelstyle" role="document" style="left:unset; width:80%">
            <div class="modal-content">
                <div class="modal-header bavdrt">
                    <h5 class="modal-title">Attachment</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <iframe style="width:100%; height:400px; border:none;"></iframe>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="AutoFillModal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document" style="left:unset; max-width: 600px;">
            <div class="modal-content">
                <div class="modal-header bavdrt">
                    <h5 class="modal-title">Auto-fill data</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">There is already data entered before for this Policy Number, do you want to auto-fill?</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger">Yes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="ServicesModal" tabindex="-1" role="dialog" aria-labelledby="AttachmodalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered mymodelstyle" role="document" style="left:unset; max-width:90%">
            <div class="modal-content">
                <div class="modal-header bavdrt">
                    <h5 class="modal-title">Co-Payment Information</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 pl-0">
                        <form class="headerbanner needs-validation form--height">
                            <div class="form-row mb-0">
                                <div class="col mb-3">
                                    <label>Service Type</label>
                                    <select class="form-control"></select>
                                </div>
                                <div class="col mb-3">
                                    <label>Service Group</label>
                                    <select class="form-control"></select>
                                </div>
                                <div class="col-md-2 mb-1">
                                    <label>Visit Type</label>
                                    <select class="form-control"></select>
                                </div>
                                <div class="col-md-1 mb-1">
                                    <label>Benefit</label>
                                    <select class="form-control"></select>
                                </div>
                            </div>
                            <div class="form-row mb-0">
                                <div class="col-md-2 mb-3">
                                    <label for="validationTooltip01">Co-pay Type</label>
                                    <select class="form-control"></select>
                                </div>
                                <div class="col-md-2 mb-1">
                                    <label for="validationTooltip04">Co-pay Value</label>
                                    <input type="number" min="0" class="form-control" id="validationTooltip04" required>
                                </div>
                                <div class="col-md-2 mb-1">
                                    <label for="validationTooltip04">Co-pay Ceiling</label>
                                    <input type="number" min="0" class="form-control" id="validationTooltip04" required>
                                </div>
                                <div class="col-1 mb-1 text-center">
                                    <label class="d-block mb-1" for="validationTooltip04">Separate Ceiling</label>
                                    <input type="checkbox" id="validationTooltip04">
                                </div>
                                <div class="col-1 text-center">
                                    <label class="d-block mb-1">Each time with each service</label>
                                    <input type="checkbox" />
                                </div>
                                <div class="col text-center">
                                    <label class="d-block mb-1">On Gross</label>
                                    <input type="checkbox" />
                                </div>
                                <div class="col mb-1">
                                    <label for="validationTooltip04" style="white-space:nowrap;">Additional Fix Amount</label>
                                    <input type="number" min="0" class="form-control" id="validationTooltip04" required>
                                </div>
                                <div class="col mb-0 text-right">
                                    <button class="btn btn-success btn-sm mt-4">Add</button>
                                </div>
                            </div>
                        </form>
                        <div class="">
                            <div>
                                <table class="table table-bordered table-condensed">
                                    <thead class="tbl-header">
                                        <tr>
                                            <th width="25%">Service Type</th>
                                            <th width="20%">Service Group</th>
                                            <th>Visit Type</th>
                                            <th>Co-Pay Type</th>
                                            <th>Co-Pay Value</th>
                                            <th>Co-Pay Ceiling</th>
                                            <th>Separate Ceiling</th>
                                            <th>Each time with each service</th>
                                            <th>Co On Gross</th>
                                            <th>Co Additional Fix Amount</th>
                                            <th>Benefit</th>
                                            <th width="7%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><label>Service Type</label></td>
                                            <td><label>Service Group</label></td>
                                            <td><label>Visit Type</label></td>
                                            <td><label>Co-Pay Type</label></td>
                                            <td><label>Co-Pay Value</label></td>
                                            <td><label>Co-Pay Ceiling</label></td>
                                            <td><label>Separate Ceiling</label></td>
                                            <td><label>Each time with each service</label></td>
                                            <td><label>Co On Gross</label></td>
                                            <td><label>Co Additional Fix Amount</label></td>
                                            <td><label>Benefit</label></td>
                                            <td class="actionss actiontd">
                                                <span><i class="fa fa-trash"></i></span>
                                                <span><i class="fa fa-edit"></i></span>
                                                <span><i class="fa fa-save"></i></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <script src="Scripts/jquerys.js"></script>
    <script src="../MPlusReferences/assets/js/main_js.js"></script>
    <script src="../MPlusReferences/Plugins/toastr/toastr-master/build/toastr.min.js"></script>
    <script src="../MPlusReferences/Plugins/moment/moment.js"></script>
    <script src="../MPlusReferences/Plugins/knockoutjs/knockout-3.4.1.js"></script>
    <script src="../MPlusReferences/Plugins/jquery-ui/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
    <script src="../MPlusReferences/Plugins/koExternalTemplateEngine/koExternalTemplateEngine_all.min.js"></script>
    <script src="Scripts/InsuranceInfoCardScript.js"></script>
    <script>
        $(".addes").click(function () {
            $(".hiidenblo").fadeToggle(100);
        });
    </script>
</body>
</html>
