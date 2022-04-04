export class CouponPayloadModel{
    public constructor(
        public id?: number,
        public category?: string,
        public company?: string,
        public title?: string,
        public description?: string,
        public startDate?: Date,
        public endDate?: Date,
        public amount?: number,
        public price?: number,
        public image?: FileList){}
    
        
    
}