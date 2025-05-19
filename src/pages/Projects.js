import React from 'react';
import '../styles/Projects.css';
import soruBankasi from '../images/soruBankasi.png';
import NotDef from '../images/NotDef.png';
import Lineer from '../images/Lineer.png';
import Siparis from '../images/Siparis.png';
import Multiple from '../images/Multiple.png';
import DecisionTree from '../images/DecisionTree.png';
import Depo from '../images/Depo.jpeg'


export function Projects() {
    return (
        <div className="projects">
            <div className="project-grid" >

                <div className="project-card">
                    <div className="project-image">
                        <img src={Siparis} alt="Kafe Sipariş Takip Sistemi" />
                    </div>
                    <div className="project-content">
                        <h3>☕️ Kafe Sipariş Takip Sistemi </h3>
                        <p>Kafe Sipariş Takip Sistemi, bir kafenin sipariş yönetimini kolaylaştırmak amacıyla
                            geliştirilmiş bir masaüstü uygulamasıdır. Kullanıcı dostu arayüzü sayesinde sipariş
                            ekleme, silme, güncelleme ve görüntüleme işlemleri hızlı ve pratik bir şekilde
                            yapılabilir. Ürünler ve fiyatlar veritabanından dinamik olarak alınmakta ve siparişlerin
                            toplam tutarı anlık olarak hesaplanmaktadır. Uygulama, kullanıcı adı ve parola ile
                            güvenli bir giriş sağlar ve kullanım kolaylığı sunar.</p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src={NotDef} alt="Not Defteri Uygulaması" />
                    </div>
                    <div className="project-content">
                        <h3>📝 Not Defteri Uygulaması </h3>
                        <p>Not Defteri Uygulaması, temel metin düzenleme işlevlerini içeren bir masaüstü
                            uygulamasıdır. Kullanıcılar yeni not oluşturabilir, düzenleyebilir ve kaydedebilir.
                            Uygulama, kullanıcı dostu bir arayüz ve hızlı düzenleme özellikleri sunar.</p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src={soruBankasi} alt="Soru Bankası Uygulaması" />
                    </div>
                    <div className="project-content">
                        <h3>📚 Soru Bankası Uygulaması </h3>
                        <p>Soru Bankası Uygulaması, sınav hazırlıkları için kullanılabilecek bir masaüstü
                            uygulamasıdır. Kullanıcılar soru ekleyebilir, doğru cevabı belirleyebilir ve soruları
                            düzenleyebilir. Excel'e dışa aktarma özelliği ile soru veritabanı kolayca
                            yönetilebilir.</p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src={Lineer} alt="Maaş Tahmini Uygulaması" />
                    </div>
                    <div className="project-content">
                        <h3>📊 Maaş Tahmini Uygulaması </h3>
                        <p>Bu proje, lineer regresyon algoritmasını kullanarak çalışanların deneyimlerine bağlı olarak maaş tahmini yapmaktadır.
                            Veriler analiz edilerek model eğitilmiş ve doğruluk oranı optimize edilmiştir.Bu bağlantıdan uygulamaya ulaşabilirsiniz: <br/>
                            <a href="https://linearregression-maastahmini.streamlit.app/" target="_blank"> projeyi görüntüle </a> </p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src={Multiple} alt="Reklam Gelir Tahmini Uygulaması" />
                    </div>
                    <div className="project-content">
                        <h3>📈 Reklam Gelir Tahmini Uygulaması </h3>
                        <p>Bu uygulama, multiple regresyon yöntemi ile farklı reklam kanallarının gelir üzerindeki
                            etkisini analiz etmektedir. Model, birden fazla bağımsız değişkeni kullanarak gelir
                            tahmini yapmaktadır.Bu bağlantıdan uygulamaya ulaşabilirsiniz:<br/>
                                <a href="https://multiplelinearregression-reklamgelirtahmini.streamlit.app" target="_blank" > projeyi görüntüle </a> </p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src={DecisionTree} alt="Diyabet Tahmini" />
                    </div>
                    <div className="project-content">
                        <h3>🩺 Diyabet Tahmini </h3>
                        <p>Diyabet hastalığı risk faktörlerini analiz ederek tahmin yapan bir uygulamadır. Decision
                            Tree algoritması kullanılarak sınıflandırma yapılmış ve model doğruluğu test
                            edilmiştir.Bu bağlantıdan uygulamaya ulaşabilirsiniz:<br/> <a href="https://decisiontree-diyabettahmini.streamlit.app/" target="_blank"> projeyi görüntüle </a> </p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src={Depo} alt="Depo Robotu Projesi" />
                    </div>
                    <div className="project-content">
                        <h3>🤖 Depo Robotu Projesi </h3>
                        <p>Takım çalışması ile yaptığımız bu proje depo içi ürün taşıma ve düzenleme işlemlerini otonom olarak gerçekleştiren bir robot sistemidir.
                            Robot, uzaktan kumanda yardımıyla kontrol edilebilir ve üzerinde bulunan sensörler sayesinde çarpma ve düşme gibi durumları algılayabilir.
                            Projede Arduino kullanılmıştır.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;
