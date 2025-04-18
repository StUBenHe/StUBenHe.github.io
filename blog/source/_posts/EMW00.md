---
title: EMW00
date: 2024-03-05 20:01:41
tags:
- 目录
categories:
- Elektrotechnik
- Elektromagnetische Wellen
mathjax: true
---

## Einführung
1. **Maxwellschen Gleichungen中出现的物理量的意义和特性**：Maxwellschen Gleichungen中的物理量包括电场 $\mathbf{E}$，磁场 $\mathbf{B}$，电荷密度 $\rho$，和电流密度 $\mathbf{J}$ 等，它们描述了电磁场的行为和相互作用。这些物理量的性质包括它们的强度、方向、分布以及与电磁场的相互关系。

2. **各个Maxwellschen Gleichungen的含义**：Maxwellschen Gleichungen包括高斯定律、高斯磁场定律、法拉第电磁感应定律和安培定律。这些方程描述了电场和磁场的产生、传播和相互作用。高斯定律和高斯磁场定律描述了电场和磁场的源，法拉第电磁感应定律描述了磁场随时间的变化如何产生电场，而安培定律描述了电流如何产生磁场。

3. **从积分形式到微分形式的Maxwellschen Gleichungen的转化**：将Maxwellschen Gleichungen从积分形式转换为微分形式可以通过应用高斯定理和斯托克斯定理来完成。这种转换使得方程更适合于描述空间中的局部变化和微观效应。

4. **Maxwellschen Gleichungen的简化假设：准静态和真空**：Maxwellschen Gleichungen在某些情况下可以简化为准静态或真空情况下的形式。准静态假设假设电场和磁场的变化非常缓慢，从而使得一些项可以忽略。真空假设假设电场和磁场在没有介质的情况下传播，从而使得一些项可以简化为零。

5. **通过Maxwell对Ampère定律的补充解释电磁波在自由空间中的传播**：通过Maxwell对Ampère定律的补充，可以解释在真空中存在电场的变化率是如何导致磁场的变化，从而产生电磁波的传播。这个补充描述了电场和磁场之间的相互作用，解释了电磁波在自由空间中的传播。

## Wellengleichung
1. **从麦克斯韦方程组中推导出电场和磁场的矢量波动方程**：电场和磁场的矢量波动方程可以通过对麦克斯韦方程组进行适当组合和操作而得到。

2. **为什么从麦克斯韦方程组推导出波动方程**：波动方程描述了电磁场的传播和行为，从麦克斯韦方程组推导出波动方程可以更好地理解电磁波在空间中的行为。

3. **为什么 d'Alembert 的解法预测每个波都可以表示为来回波的叠加**：d'Alembert 的解法预测了这种情况，因为它将波动方程转化为对两个变量的偏微分方程，其中一个表示前进波，另一个表示后退波。

4. **如何将周期函数表示为不同频率的余弦和正弦振动以及一个平均值的叠加**：周期函数可以通过傅里叶级数展开，表示为不同频率的余弦和正弦振动的线性组合，加上一个平均值。

5. **通过复数矢量表示法描述场强的数学优势**：复数矢量表示法将场强表示为复数，简化了计算和分析电磁场的行为，尤其是在频率稳定的情况下。

6. **为什么麦克斯韦方程组可以不带显式时间依赖，并且只用复振幅来表述**：麦克斯韦方程组描述了电磁场的行为，其中电磁波是频率稳定的，因此可以将其表示为只含有复振幅的形式，而不需要显式地引入时间依赖。

## Zeitharmonische ebene Wellen
1. **Maxwell方程组**：这是描述电磁场的基本方程。它们可以用复振幅形式表示，因为电磁波是频率稳定的，没有显式的时间依赖关系。

2. **一般波动方程与Helmholtz方程的关系**：Helmholtz方程是一般波动方程的特例，当电磁场中没有源时，它可以简化为Helmholtz方程。使用复数表示法，这些方程可以更简洁地表达。

3. **时谐平面波的描述**：时谐平面波可以用复数表示法描述，其中包括波矢，振幅和相位信息。

4. **Poynting矢量描述的辐射能量**：Poynting矢量表示电磁场中能量的流动方向和速率。通过它，可以描述电磁场的辐射能量。

5. **实部和虚部的Poynting矢量之间的关系**：实部和虚部的Poynting矢量是复Poynting矢量的构成部分，它们在描述能量流动和存储方面起着重要作用。

6. **功率传输和无功功率传输**：Poynting矢量可以描述功率的传输，包括有功功率（真实功率）和无功功率（虚功率）。

7. **波的极化**：波的极化描述了电磁波振动方向的特性。不同的极化状态可以通过合适的数学描述来区分和解释。




## Elektromagnetsche Wellen in dispersiven Medien
1. **时间相关的极化率**：引入它是为了描述其介电特性随时间变化的材料。这种极化率描述了材料对电场的响应，其中响应可能具有延迟或预先条件。

2. **复波数**：它将平面波的实部（描述传播）和虚部（描述衰减或损耗）结合起来。实部决定传播速度，而虚部表示场的衰减。

3. **相速度和群速度**：相速度描述波的相位移动速度，而群速度描述波的振幅移动速度。它们可能有所不同，尤其是在色散介质中。

4. **相位常数的泰勒展开的高阶项**：泰勒展开中的高阶项可以描述影响波传播的非线性效应，如色散、非线性折射或调制。

5. **洛伦兹-德鲁德共振器模型**：它允许对材料的复电容率做出陈述，这些复电容率是由共振频率和阻尼过程的总和组成的。

6. **介质**：介质是一种在电场中被极化的绝缘材料。它的相对电容率描述了它增强电场的程度。

7. **（理想）导体**：（理想）导体是一种良好导电的材料。它的电导率很高，其相对电容率通常接近零。

8. **电磁波传播的差异**：介质支持电磁波的传播，而导体由于其高电导率而强烈吸收电磁波。传播速度、衰减和色散可能会有很大的变化。



## Hertzscher Dipol
1. **赫兹偶极子的物理模型**：赫兹偶极子基于振荡电偶极子的模型。当导线中的电流周期性地反转时，会产生变化的电场，从而产生电磁波。因此，赫兹偶极子对于理解电磁波的生成至关重要。

2. **使用磁矢势解耦麦克斯韦方程**：通过使用磁矢势，可以将麦克斯韦方程解耦，从而简化问题的求解。这种势能够将电场和磁场的方程分开考虑，使得复杂的问题可以分解为更简单的部分问题。

3. **球坐标中的球面波的重要性**：球面波是球坐标中波动方程的解。它们在描述球对称系统中的电磁场时具有重要作用，而这种情况在自然界中经常出现。

4. **球坐标下 Helmholz 方程解的作用**：通过 Helmholz 方程在球坐标下的解，可以表示一般偶极子的矢势。这些解描述了偶极子周围场的空间分布。

5. **赫兹偶极子的近场和远场中主要发生的盲功率和有功功率传输**：在赫兹偶极子的近场中，主要是盲功率传输占主导地位，因为此处磁场占主导地位且不传输能量。在远场中，有功功率传输占主导地位，因为电磁场在这里传播并传输能量。

## Reflexion und Brechung
 
1. **边界处的切向和法向场分量（不）连续性以及推导的基本关系**：电场和磁场的切向分量在边界处是连续的，而法向分量则不是。这可以通过麦克斯韦方程组以及边界条件来推导。

2. **将电磁（平面）波分解为入射、反射和透射部分的能力**：在界面上，电磁（平面）波可以分解为入射、反射和透射三部分，其振幅和相位由反射和透射系数决定。

3. **导出反射和折射定律时的假设**：导出反射和折射定律时通常假设界面是平坦的，介质是线性和各向同性的。

4. **区分垂直和平行极化的标准**：极化是基于电场矢量相对于界面的方向来区分的。垂直极化意味着电场与入射平面垂直，而平行极化意味着电场与入射平面平行。

5. **极化对反射和透射系数的影响**：极化会影响反射和透射系数，因为反射和透射波的振幅取决于极化方向。

6. **全反射条件**：当第二介质的折射率小于第一介质的折射率，并且入射角大于临界角时，就会发生全反射。

7. **布鲁斯特角的意义**：布鲁斯特角是入射角，使得反射波是垂直极化的，而透射波没有垂直极化成分。这个角度在减少光学表面反射中起着重要作用。

## Beugung und Interferenz
1. **惠更斯原理的表述**：你理解了根据惠更斯原理，每个波函数都可以表示为球面波的叠加，这是波动光学中的重要概念。

2. **对位置矢量 r 和 r' 的积分需求**：你明白了为什么除了表示观察点的位置矢量 r 外，还需要对位置矢量 r' 进行积分。这样做可以全面考虑波的衍射和干涉。

3. **在导出基尔霍夫衍射积分时所做的假设**：你了解了在导出基尔霍夫衍射积分时所做的假设，以描述波在孔径上的衍射过程。

4. **弗涅尔和夫琅禾费近似以及其适用范围**：你理解了如何应用弗涅尔和夫琅禾费近似来计算衍射模式，并且知道它们各自的适用范围。

5. **夫琅禾费近似和傅立叶变换之间的关系**：你认识到，根据夫琅禾费近似，对于平面波而言，衍射积分相当于孔径函数的二维傅立叶变换，这是波动光学与信号处理之间的重要关系。

## Gaußscher strahl
1. **为什么我们考虑高斯光束而不是平面波或球面波**：我们之所以考虑高斯光束，是因为它在光学系统中有广泛的应用，可以更好地描述实际光学系统中的光束行为。

2. **偏光近似的假设和其与 Fresnel 近似的关系**：偏光近似假设是对亥姆霍兹方程的一种近似处理，与 Fresnel 近似关联紧密。它假设光束在光轴附近的传播，从而简化了亥姆霍兹方程的求解。

3. **高斯光束在焦点处的最小半径以及随着距离增加而增加**：高斯光束在焦点处的半径最小，并且随着从焦点的距离增加而增大，这是高斯光束的特征之一。

4. **高斯光束横向场分布的数学描述如何考虑到光束半径和相位曲率的变化**：横向场分布的数学描述考虑到了光束的半径和相位曲率的变化，这是通过高斯光束的束腰位置和曲率来实现的。

5. **高斯光束仅在焦点处具有平面相位前沿**：高斯光束的一个重要特征是它在焦点处具有平面相位前沿，这使得焦点处的光束特别适合许多光学应用。

6. **Gouy 相位偏移的作用**：Gouy 相位偏移是指光束焦点周围相位的变化，它在光束传播过程中起着重要作用，尤其是在光学成像和激光加工等应用中。

## Optische Systeme
1. **透镜的用途和不同类型**：我们使用透镜来聚焦、放大或调整光束的传播方向。不同类型的透镜包括凸透镜、凹透镜、棱镜等。

2. **球面和抛物面的差异**：球面透镜的曲率半径在所有方向上相同，而抛物面透镜的曲率半径沿一个方向是不同的。抛物面透镜通常用于消除球面像差。

3. **薄透镜的特点及为何使用这种简化**：薄透镜假设透镜的厚度非常小，因此可以将透镜的折射效应简化为平面表面的折射。这种简化使得透镜系统的分析更加方便。

4. **为何汇聚和发散透镜会聚或分散入射波以及焦距在其中扮演的角色**：汇聚透镜将入射波聚焦到焦点处，而发散透镜将入射波分散。焦距决定了透镜的聚焦能力。

5. **有限横向展宽的汇聚透镜如何影响焦点处的斑点大小**：有限横向展宽会导致焦点处的光斑变大，这是因为不同位置的光线将汇聚到焦点附近的不同位置。

6. **在什么条件下我们也可以使用镜子来收集和散射电磁波**：镜子也可以用来汇聚和发散电磁波，条件是镜面必须光滑且反射率高，使得光线在反射过程中保持其聚焦或分散的特性。


## ParallelplattenLeitung
1. **电磁波在界面上的行为，特别是在理想导体上的行为**：电磁波在界面上的反射和折射现象是基于麦克斯韦方程组和边界条件的，理想导体表现出完全反射的特性。

2. **入射波与在导体上反射的波的叠加形成了一种 - 垂直于界面的 - 驻波**：来自入射波和反射波的叠加形成了沿界面垂直传播的驻波，这是电磁波在理想导体上的典型行为。

3. **通过叠加形成的波的相速度和群速度如何随入射角而变化**：通过叠加形成的波的相速度和群速度取决于入射角和介质特性，它们描述了波的传播速度和波包的传播速度。

4. **平行板波导的工作原理如何从对理想导体上波的入射的考虑中推导出来**：平行板波导的工作原理可以通过考虑电磁波在理想导体上的反射和折射来推导。

5. **模式的定义以及在平行板波导中各个模式可以传播的条件**：模式是波导中的特定电磁场分布形式，平行板波导中的各个模式受到波导尺寸和工作频率的限制。

6. **对于平行板波导，各个模式的边缘频率的重要性**：边缘频率是指波导中特定模式的传播频率的临界值，超过该频率将无法在波导中传播该模式。

7. **相速度和群速度在平行板波导中的行为**：相速度和群速度取决于波导的几何结构和工作频率，它们描述了波包和能量传播的速率。



## Rechteckhohlleiter
1. **E-和H-波的含义及其在波导中解决麦克斯韦方程组中的区别**：E-和H-波是电磁波的两种基本模式，它们在波导中的传播方式不同，对于解决波导中的麦克斯韦方程组至关重要。

2. **我们如何解析地求解纵向场分量的波动方程**：我们可以通过将麦克斯韦方程组应用到波导的特定几何形状中，并利用适当的边界条件，解析地求解纵向场分量的波动方程。

3. **矩形波导中必须满足的边界条件，以及因此得到的E-和H-波的纵向场分量的解**：在矩形波导中，必须满足适当的电场和磁场的边界条件，这导致了E-和H-波的纵向场分量的特定解。

4. **什么是模式以及在矩形波导中各个模式可以传播的条件**：模式是描述波导中电磁场的特定空间分布形式。在矩形波导中，不同模式的传播受到几何尺寸和工作频率的限制。

5. **E-和H-波允许的模式数**：E-和H-波在矩形波导中允许的模式由其几何结构和工作频率决定。

6. **矩形波导中模式的外观**：不同模式的电磁场在矩形波导中会呈现出特定的空间分布形式，如横向和纵向的电场和磁场分布。

7. **边缘频率对矩形波导模式的影响**：边缘频率是指波导中特定模式的传播频率的临界值，超过此频率将无法在波导中传播该模式。

8. **矩形波导中的相位速度和群速度的行为**：在矩形波导中，相位速度和群速度取决于波导的几何结构和工作频率，它们描述了波包和能量传播的速率。

## Rundhohlleiter
1. **我们如何解析地求解圆形波导中纵向场分量的波动方程**：我们可以采用分离变量法的方法，将麦克斯韦方程组应用于圆形波导的特定几何形状中，并应用适当的边界条件，来解析地求解纵向场分量的波动方程。

2. **Bessel方程和修正Bessel方程之间的关系**：Bessel方程和修正Bessel方程是一类特殊的微分方程，它们描述了径向方向上的波动行为。修正Bessel方程是Bessel方程的变种，两者之间的关系是修正Bessel方程在原点处有一个额外的奇异解。

3. **Bessel方程和修正Bessel方程的解函数**：Bessel方程和修正Bessel方程的解函数称为Bessel函数和修正Bessel函数，它们在物理学和工程中具有广泛的应用。

4. **圆形波导中必须满足的边界条件，以及因此得到的E-和H-波的纵向场分量的解**：在圆形波导中，必须满足适当的电场和磁场的边界条件，这导致了E-和H-波的纵向场分量的特定解。

5. **圆形波导中的E-和H-模式的外观**：不同模式的电磁场在圆形波导中会呈现出特定的空间分布形式，如径向和环向的电场和磁场分布。

6. **为什么相同模式数的E-和H-波的传播常数会有所不同**：E-和H-波的传播常数取决于波导的几何结构和工作频率，因此即使是相同的模式数，它们的传播常数也可能不同。

7. **圆形波导中相位速度和群速度的行为**：在圆形波导中，相位速度和群速度取决于波导的几何结构和工作频率，它们描述了波包和能量传播的速率。



## Dielektrischer Schichtwellenleiter

1. **介质层波导的波传播条件**：介质层波导的波传播需要满足适当的边界条件，包括电磁场在介质层和周围介质之间的连续性以及电磁场在波导内部的传播模式。

2. **边界处的全反射对电磁波的影响**：在介质层波导中，当电磁波入射角大于临界角时，发生全反射，导致波完全反射回波导内部，而不是透射到外部介质中。

3. **为何只有在与界面成离散角度的情况下才可能发生波传播**：波只有在与介质层表面形成特定角度的情况下才能通过全反射进入波导，这些角度是离散的，这样波才能在介质层内部传播。

4. **如何图解解垂直和平行极化的特征值方程，并由此推导出可传播模式的数量**：可以通过图解特征值方程来确定波导中可传播模式的数量，这些方程描述了波在波导中的传播条件。

5. **波导参数和可传播模式数量的关系**：波导的几何形状、介质特性和工作频率等参数会影响波导中可传播模式的数量，不同的参数组合可能导致不同数量的可传播模式。

6. **平行极化下的传播常数通常小于垂直极化**：在介质层波导中，通常情况下，平行极化模式的传播常数要小于垂直极化模式，这是由介质的特性和波的传播方式所决定的。

7. **介质界面处的电磁波行为**：介质界面处的电磁波会发生反射、折射和透射等现象，这取决于介质的折射率、入射角度和波长等因素。

8. **如何求解介质层波导中的波动方程以及解的条件**：我们可以通过将麦克斯韦方程组应用于介质层波导的特定几何形状中，并应用适当的边界条件来求解波动方程，解必须满足波导的几何和物理条件。

9. **折射率剖面对波导模式的场分布的影响**：波导的折射率剖面会影响波导模式的场分布，不同的剖面会导致不同的波导模式形态。

## stufenindexfaser
1. **什么是弱导波**，以及相应条件对波的传播的意义。
2. **线偏振波或模态**是什么，以及与它们相关的近似。
3. **阶梯折射率光纤的波传播是基于什么现象的**。
4. **我们在柱坐标系中解决Helmholtz方程的方法**。
5. **为什么以及如何简化弱导波条件下的连续性条件**。
6. **（简化的）连续性条件对解的影响**。
7. **我们是如何推导阶梯折射率光纤的特征值方程的**。
8. **我们如何通过图形方法确定阶梯折射率光纤中传播模的数量**。
9. **什么是退化模态**，以及它们的特性。
10. **决定传播模数量的参数，以及阶梯折射率光纤的折射率剖面对此的影响**。
11. **阶梯折射率光纤中的波传播与圆形波导的区别在哪些方面**。