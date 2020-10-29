using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class TormimBL
    {
        public static TormimDTO ConvertPackagesToDTO(Tormim t)
        {
            return new TormimDTO
            {
                Business_name=t.Business_name,
                torem_address=t.torem_address,
                torem_email=t.torem_email,
                torem_id=t.torem_id,
                torem_phone=t.torem_phone
            };
        }

        public static Tormim ConvertPackagesToDAL(TormimDTO t)
        {
            return new Tormim
            {
                Business_name = t.Business_name,
                torem_address = t.torem_address,
                torem_email = t.torem_email,
                torem_id = t.torem_id,
                torem_phone = t.torem_phone
            };
        }

        public static int AddTorem(TormimDTO torem)
        {
            using (veaarev_vaEntities db = new veaarev_vaEntities())
            {
                Tormim newTorem = new Tormim
                {
                    Business_name=torem.Business_name,
                    torem_phone=torem.torem_phone,
                     //torem_id=torem.torem_id,
                     torem_email=torem.torem_email,
                     torem_address=torem.torem_address              
                };
                db.Tormims.Add(newTorem);

                try
                {
                    db.SaveChanges();
                    return newTorem.torem_id;
                }
                catch (Exception e)
                {
                    return -1;
                }
            }
        }

    }
}
