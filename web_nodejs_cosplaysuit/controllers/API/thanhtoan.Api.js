var myMD = require('../../models/Bill.model');

var objReturn = {
    stu: 1,
    msg: 'ok'
}
exports.getidthanhtoan = async (req, res, next) => {
    //lấy danh sách giỏ hàng theo id
    let dieu_kien_loc = null;
    if (typeof (req.params.id) != 'undefined') {
        dieu_kien_loc = { id_bill: req.params.id};
    }
    var list = await myMD.tb_thanhtoanModel.find(dieu_kien_loc).populate('id_bill');

    res.send(list);
}

exports.Addthanhtoan = async (req, res, next) => {
    let add = new myMD.tb_thanhtoanModel();
        add.id_bill = req.body.id_bill;
        add.totalPayment = req.body.totalPayment; 
        add.CardType = req.body.CardType;
        add.vnp_BankTranNo = req.body.vnp_BankTranNo;
        add.vnp_BankCode = req.body.vnp_BankCode; 
        add.vnp_OrderInfo = req.body.vnp_OrderInfo;
        add.vnp_PayDate = req.body.vnp_PayDate;
        add.vnp_TmnCode = req.body.vnp_TmnCode;
        add.vnp_SecureHash = req.body.vnp_SecureHash; 
        add.vnp_TxnRef = req.body.vnp_TxnRef; 
        add.id_properties = req.body.id_properties; 
    let new_CMD = await add.save();
    console.log(new_CMD);
    try{
        if(new_CMD){
            objReturn.data = add;
            objReturn.stu = 1;
            objReturn.msg = "Thêm thành công"
        }else{
            objReturn.stu = 0;
            objReturn.msg = "Thêm thất bại"
        }
    }catch(error){
        objReturn.stu = 0;
        objReturn.msg = error.msg;
    }

    res.json(objReturn);
}

exports.getidaddress = async (req, res, next) => {
    //lấy danh sách giỏ hàng theo id
    let dieu_kien_loc = null;
    if (typeof (req.params.id) != 'undefined') {
        dieu_kien_loc = { id_bill: req.params.id};
    }
    var list = await myMD.tb_addressModel.find(dieu_kien_loc).populate('id_bill');

    res.send(list);
}

exports.Add_address = async (req, res, next) => {

    let add = new myMD.tb_addressModel();
        add.id_bill = req.body.id_bill;
        add.address = req.body.address;
        add.phone = req.body.phone;
        add.fullname = req.body.fullname; 
    let new_CMD = await add.save();
    console.log(new_CMD);
    try{
        if(new_CMD){
            objReturn.data = add;
            objReturn.stu = 1;
            objReturn.msg = "Thêm thành công"
        }else{
            objReturn.stu = 0;
            objReturn.msg = "Thêm thất bại"
        }
    }catch(error){
        objReturn.stu = 0;
        objReturn.msg = error.msg;
    }

    res.json(objReturn);
}